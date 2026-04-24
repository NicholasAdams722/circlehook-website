export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, firmName, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof firmName !== "string" || !firmName.trim() ||
    typeof email !== "string" || !email.trim() ||
    typeof message !== "string" || !message.trim()
  ) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  // TODO: Send email via Resend
  // Steps when ready:
  //   1. npm install resend
  //   2. Add RESEND_API_KEY to .env.local
  //   3. Verify circlehook.io domain in Resend dashboard
  //   4. Replace this block:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Circle Hook <hello@circlehook.io>",
  //   to: "nicholas@circlehook.io",
  //   subject: `New inquiry from ${name} at ${firmName}`,
  //   text: [
  //     `Name: ${name}`,
  //     `Firm: ${firmName}`,
  //     `Email: ${email}`,
  //     `Current site: ${website || "not provided"}`,
  //     `Message:\n${message}`,
  //   ].join("\n"),
  // });

  return Response.json({ success: true });
}
