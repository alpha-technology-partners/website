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

// No backend yet: the form opens the visitor's email client with the details filled in.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Workflow audit: ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Company: ${get("company")}`,
      `Main issue: ${get("topic")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
      <button className="btn btn-primary btn-block" type="submit">
        Request my audit call
      </button>
      <p className="form-note" role="status">
        {sent ? `Your email app should open now. If it doesn't, write to ${site.email}.` : "We reply within one business day."}
      </p>
    </form>
  );
}
