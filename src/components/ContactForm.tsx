 "use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/types";

type Copy = {
  formName: string;
  formEmail: string;
  formService: string;
  formMessage: string;
  formSend: string;
  formSending: string;
  formSuccess: string;
  formError: string;
  selectService: string;
};

export default function ContactForm({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale })
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-label">{copy.formName}
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" className="form-input" placeholder={locale === "ar" ? "اسمك بالكامل" : "Full name"}/>
        </label>
        <label className="form-label">{copy.formEmail}
          <input name="email" type="email" required maxLength={254} autoComplete="email" className="form-input" placeholder="name@example.com"/>
        </label>
      </div>
      <label className="form-label">{copy.formService}
        <select name="service" required defaultValue="" className="form-input">
          <option value="" disabled>{copy.selectService}</option>
          <option value="website">{locale === "ar" ? "تصميم وبرمجة موقع" : "Website design & development"}</option>
          <option value="platform">{locale === "ar" ? "منصة أو نظام إداري" : "Platform or business system"}</option>
          <option value="ecommerce">{locale === "ar" ? "متجر إلكتروني" : "E-commerce"}</option>
          <option value="uiux">{locale === "ar" ? "تصميم UI/UX" : "UI/UX design"}</option>
          <option value="other">{locale === "ar" ? "خدمة أخرى" : "Other"}</option>
        </select>
      </label>
      <label className="form-label">{copy.formMessage}
        <textarea name="message" required minLength={10} maxLength={5000} rows={4} className="form-input resize-y" placeholder={locale === "ar" ? "ما الفكرة التي تريد تنفيذها؟" : "What would you like to build?"}/>
      </label>
      <div className="hidden" aria-hidden="true"><label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
      <button type="submit" disabled={loading} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? copy.formSending : copy.formSend} <Send size={16}/>
      </button>
      {status === "success" && <p role="status" className="flex items-start gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm leading-6 text-emerald-200"><CheckCircle2 size={18} className="mt-1 shrink-0"/>{copy.formSuccess}</p>}
      {status === "error" && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">{copy.formError}</p>}
    </form>
  );
}
