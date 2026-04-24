"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";

const labelClass = "block text-sm font-medium text-foreground mb-1.5";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fields, setFields] = useState({
    name: "",
    firmName: "",
    email: "",
    website: "",
    message: "",
  });

  function set(field: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "Something went wrong.");
      }

      setState("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-lg border border-border bg-card p-8 md:p-10">
        <p className="font-display text-2xl font-bold text-foreground">
          Got it.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. You&rsquo;ll hear back within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-8 md:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            required
            value={fields.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>

        {/* Firm name */}
        <div>
          <label htmlFor="firmName" className={labelClass}>
            Firm name
          </label>
          <input
            id="firmName"
            type="text"
            name="firmName"
            autoComplete="organization"
            required
            value={fields.firmName}
            onChange={set("firmName")}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>

        {/* Current website */}
        <div>
          <label htmlFor="website" className={labelClass}>
            Current website{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="website"
            type="url"
            name="website"
            autoComplete="url"
            placeholder="https://"
            value={fields.website}
            onChange={set("website")}
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={fields.message}
            onChange={set("message")}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {state === "error" && (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          size="lg"
          disabled={state === "submitting"}
          className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent/50 disabled:opacity-60"
        >
          {state === "submitting" ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
