"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const topics = [
  "Moving off a legacy system",
  "Cutting SaaS costs",
  "Automating manual work",
  "A custom tool or portal",
  "Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "error";

// Posts to app/api/contact, which emails the details to info@ via Resend.
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Couldn't send right now.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send right now.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form form-done" role="status">
        <p className="h3">Thanks, we&rsquo;ve got it<span className="dot" aria-hidden /></p>
        <p className="muted">We&rsquo;ll reply within one business day to book your audit call.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        <span>Company</span>
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        <span>What&rsquo;s the biggest issue?</span>
        <select name="topic" defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Which tools do you use today?</span>
        <textarea name="message" rows={4} placeholder="e.g. HubSpot, Monday, an old Access database, lots of spreadsheets" />
      </label>
      {/* Honeypot for bots; hidden from people and screen readers. */}
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden />
      <button className="btn btn-primary btn-block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my audit call"}
      </button>
      <p className="form-note" role="status">
        {status === "error" ? (
          <>
            {error} Email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </>
        ) : (
          "We reply within one business day."
        )}
      </p>
    </form>
  );
}
