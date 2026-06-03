import { Resend } from "resend";
import { FIRM_TYPES, type FirmType } from "@/lib/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;

interface ContactPayload {
  name: string;
  email: string;
  firmName: string;
  firmType: FirmType;
  message: string;
}

type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

function validate(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const raw = input as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const firmName = typeof raw.firmName === "string" ? raw.firmName.trim() : "";
  const firmType = typeof raw.firmType === "string" ? raw.firmType : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  if (!name) return { ok: false, error: "Name is required." };
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "A valid work email is required." };
  }
  if (!firmName) return { ok: false, error: "Firm name is required." };
  if (!FIRM_TYPES.includes(firmType as FirmType)) {
    return { ok: false, error: "Select a firm type from the list." };
  }
  if (message.length < MIN_MESSAGE_LENGTH) {
    return {
      ok: false,
      error: `Message should be at least ${MIN_MESSAGE_LENGTH} characters.`,
    };
  }

  return {
    ok: true,
    data: { name, email, firmName, firmType: firmType as FirmType, message },
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM_ADDRESS ?? "nick@circlehook.io";
  const toAddress = process.env.CONTACT_EMAIL ?? "nick@circlehook.io";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return Response.json(
      { error: "Email delivery is not configured. Please email nick@circlehook.io directly." },
      { status: 500 }
    );
  }

  const { name, email, firmName, firmType, message } = result.data;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Firm name: ${firmName}`,
    `Firm type: ${firmType}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New inquiry from ${firmName} (${firmType})`,
      text,
    });

    if (error) {
      console.error("Resend send error:", error);
      return Response.json(
        { error: "Failed to send message. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
