"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { contact } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-base text-foreground transition-colors hover:border-foreground/30 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-50";

const labelClass = "text-sm font-medium text-foreground";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      firmName: String(formData.get("firmName") ?? "").trim(),
      firmType: String(formData.get("firmType") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Failed to send message.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message."
      );
    }
  }

  return (
    <Section id="contact" width="prose">
      <Heading level="section">{contact.heading}</Heading>

      {status === "success" ? (
        <p
          role="status"
          aria-live="polite"
          className="mt-12 text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]"
        >
          {contact.successMessage}
        </p>
      ) : (
        <>
          <p className="mt-6 max-w-[65ch] text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
            {contact.leadText}
          </p>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                {contact.fields.name.label}
              </label>
              <input
                id="name"
                name={contact.fields.name.name}
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                {contact.fields.email.label}
              </label>
              <input
                id="email"
                name={contact.fields.email.name}
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="firmName" className={labelClass}>
                {contact.fields.firmName.label}
              </label>
              <input
                id="firmName"
                name={contact.fields.firmName.name}
                type="text"
                required
                autoComplete="organization"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="firmType" className={labelClass}>
                {contact.fields.firmType.label}
              </label>
              <div className="relative">
                <select
                  id="firmType"
                  name={contact.fields.firmType.name}
                  required
                  defaultValue=""
                  className={cn(inputClass, "appearance-none pr-10")}
                >
                  <option value="" disabled>
                    {contact.firmTypePlaceholder}
                  </option>
                  {contact.firmTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                >
                  <path d="M6 8l4 4 4-4" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClass}>
                {contact.fields.message.label}
              </label>
              <textarea
                id="message"
                name={contact.fields.message.name}
                required
                minLength={20}
                rows={4}
                className={cn(inputClass, "h-auto min-h-[112px] resize-y py-3")}
              />
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="h-11 w-full bg-accent px-5 text-base text-accent-foreground hover:bg-accent/90 sm:w-fit"
              >
                {status === "submitting"
                  ? contact.sendingLabel
                  : contact.submitLabel}
              </Button>

              {status === "error" && (
                <p
                  role="alert"
                  aria-live="assertive"
                  className="text-sm text-destructive"
                >
                  {errorMessage || contact.errorMessage}
                </p>
              )}
            </div>
          </form>

          {calendlyUrl && (
            <p className="mt-10 text-sm text-muted-foreground">
              {contact.secondaryCtaPrefix}{" "}
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:text-accent/80"
              >
                {contact.secondaryCtaLink}
              </a>
            </p>
          )}
        </>
      )}
    </Section>
  );
}
