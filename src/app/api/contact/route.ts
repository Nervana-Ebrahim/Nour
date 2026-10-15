import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const data = body as Record<string, unknown>;
    // Basic honeypot: bots often fill hidden fields.
    if (typeof data.website === "string" && data.website.trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const service = typeof data.service === "string" ? data.service.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!service || service.length > 80 || message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Demo behavior only: submissions are validated but not stored or emailed.
    // Connect a database/email provider before using this in production.
    return NextResponse.json({ ok: true, received: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
