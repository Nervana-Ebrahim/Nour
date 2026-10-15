 "use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import type { Locale } from "@/types";

type Props = {
  locale: Locale;
  nav: readonly { label: string; href: string }[];
};

export default function Header({ locale, nav }: Props) {
  const [open, setOpen] = useState(false);
  const other = locale === "ar" ? "en" : "ar";
  const languageLabel = locale === "ar" ? "EN" : "ع";

  return (
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">{item.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a href={`/${other}`} className="rounded-xl border border-white/10 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-blue/50 hover:text-white" aria-label="Switch language">{languageLabel}</a>
          <a href="#contact" className="button-primary !px-4 !py-2.5 text-sm">{locale === "ar" ? "اطلب مشروعك" : "Start a project"} <ArrowUpRight size={15}/></a>
        </div>
        <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>
      {open && <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
        <nav className="flex flex-col gap-1">
          {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{item.label}</a>)}
          <a href={`/${other}`} className="rounded-lg px-3 py-3 text-sm text-blue-300">{locale === "ar" ? "English" : "العربية"}</a>
        </nav>
      </div>}
    </header>
  );
}
