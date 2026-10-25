import { Resend } from "resend";
import { site } from "@/lib/site";

const LIMITS = { name: 200, email: 320, company: 200, topic: 100, message: 5000 };

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const field = (k: keyof typeof LIMITS) => String(body[k] ?? "").trim().slice(0, LIMITS[k]);
  const name = field("name");
  const email = field("email");
  const company = field("company");
  const topic = field("topic");
  const message = field("message");

  // Honeypot: real visitors never see or fill this field.
  if (String(body.website ?? "")) return Response.json({ ok: true });

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please add your name and a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form submission not sent.");
    return Response.json({ error: "The form isn't set up yet." }, { status: 500 });
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL || `${site.name} <website@${site.domain}>`,
    to: process.env.CONTACT_TO_EMAIL || site.email,
    replyTo: email,
    subject: `Workflow audit request: ${company || name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "-"}`,
      `Main issue: ${topic || "-"}`,
      "",
      "Tools they use today:",
      message || "-",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Couldn't send right now." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
