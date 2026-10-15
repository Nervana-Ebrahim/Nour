import Logo from "@/components/Logo";
import type { Locale } from "@/types";

export default function Footer({ locale, text, rights }: { locale: Locale; text: string; rights: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[.07]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div><Logo/><p className="mt-3 max-w-sm text-sm leading-6 text-muted">{text}</p></div>
        <div className="text-sm text-slate-500">© {year} LOGIX. {rights} <span className="mx-1">·</span> <a className="hover:text-white" href={`/${locale}#contact`}>{locale === "ar" ? "تواصل معنا" : "Contact us"}</a></div>
      </div>
    </footer>
  );
}
