import { notFound } from "next/navigation";
import { ArrowDownLeft, ArrowUpRight, Code2, Layers3, Sparkles, ShoppingBag, MoveUpRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/locale";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const t = getContent(locale);
  const rtl = locale === "ar";
  const serviceIcons = [Code2, Layers3, Sparkles, ShoppingBag];

  return (
    <main dir={rtl ? "rtl" : "ltr"} lang={locale} className="min-h-screen overflow-hidden">
      <Header locale={locale} nav={t.nav} />
      <section id="home" className="hero-grid relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-blue/10 blur-[100px]" />
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold tracking-[.13em] text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue shadow-[0_0_12px_#3678f6]" />
              {t.eyebrow}
            </div>
            <h1 className="text-4xl font-bold leading-[1.25] tracking-tight sm:text-6xl lg:text-7xl">
              {t.heroTitleA}<br />
              <span className="text-gradient">{t.heroTitleB}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">{t.heroText}</p>
            <div className={`mt-9 flex flex-wrap gap-3 ${rtl ? "justify-start" : "justify-start"}`}>
              <a href="#contact" className="button-primary">
                {t.primaryCta} <MoveUpRight size={17} />
              </a>
              <a href="#services" className="button-secondary">{t.secondaryCta}</a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted">
              <span className="flex -space-x-2 rtl:space-x-reverse">
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink bg-blue/20 text-blue-200"><Code2 size={14}/></span>
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink bg-violet-400/20 text-violet-200"><Layers3 size={14}/></span>
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink bg-cyan-400/20 text-cyan-100"><Sparkles size={14}/></span>
              </span>
              {t.trustLine}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-blue/15 blur-[75px]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[.09] to-white/[.015] p-3 shadow-glow">
              <div className="rounded-[1.5rem] border border-white/[.07] bg-[#080e1a] p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex gap-2"><i className="h-2.5 w-2.5 rounded-full bg-red-400/80"/><i className="h-2.5 w-2.5 rounded-full bg-yellow-300/80"/><i className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/></div>
                  <span className="text-xs text-slate-500">LOGIX / DIGITAL STUDIO</span>
                </div>
                <div className="grid grid-cols-[1fr_88px] gap-4 py-7">
                  <div>
                    <div className="mb-3 h-2 w-20 rounded bg-blue/70"/>
                    <div className="h-4 w-full rounded bg-white/10"/>
                    <div className="mt-2 h-4 w-4/5 rounded bg-white/10"/>
                    <div className="mt-5 h-2 w-full rounded bg-white/5"/>
                    <div className="mt-2 h-2 w-3/4 rounded bg-white/5"/>
                    <div className="mt-6 h-8 w-28 rounded-lg bg-blue shadow-[0_0_24px_rgba(54,120,246,.25)]"/>
                  </div>
                  <div className="grid place-items-center rounded-2xl border border-blue/25 bg-gradient-to-br from-blue/20 to-cyan-300/5">
                    <div className="logo-mark large">L<span>X</span></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Design", "Develop", "Deliver"].map((label, i) => (
                    <div key={label} className="rounded-xl border border-white/[.07] bg-white/[.025] p-3">
                      <div className="mb-3 grid h-7 w-7 place-items-center rounded-lg bg-blue/15 text-blue-300"><Check size={14}/></div>
                      <div className="text-xs font-semibold text-slate-200">{label}</div>
                      <div className="mt-2 h-1 w-full rounded bg-white/10"><div className="h-1 rounded bg-blue" style={{width: `${88 - i * 12}%`}}/></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={`absolute -bottom-5 ${rtl ? "-left-3 sm:-left-7" : "-right-3 sm:-right-7"} rounded-2xl border border-white/10 bg-panel/95 px-5 py-4 shadow-xl backdrop-blur`}>
              <div className="text-xs text-muted">Digital experiences</div>
              <div className="mt-1 flex items-center gap-2 font-semibold"><span className="h-2 w-2 rounded-full bg-emerald-400"/> Built around your goals</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-wrap">
        <SectionHeading label={t.servicesLabel} title={t.servicesTitle} text={t.servicesText} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return <article key={service.number} className="service-card group">
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-blue/20 bg-blue/10 text-blue-300"><Icon size={22}/></span>
                <span className="text-sm font-semibold text-slate-600">{service.number}</span>
              </div>
              <h3 className="mt-7 text-lg font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              <a href="#contact" aria-label={service.title} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition group-hover:gap-3">
                {rtl ? "ناقشنا فكرتك" : "Discuss your idea"} {rtl ? <ArrowDownLeft size={16}/> : <ArrowUpRight size={16}/>}
              </a>
            </article>;
          })}
        </div>
      </section>

      <section id="work" className="section-wrap">
        <SectionHeading label={t.workLabel} title={t.workTitle} text={t.workText} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.projects.map((project) => <article key={project.visual} className="project-card">
            <div className={`project-art bg-gradient-to-br ${project.accent}`}>
              <div className="absolute inset-5 rounded-2xl border border-white/10 bg-[#080d18]/75 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between"><span className="text-xs text-slate-400">LOGIX / CONCEPT</span><MoveUpRight size={16} className="text-blue-300"/></div>
                <div className="mt-8 text-5xl font-bold tracking-tight text-white/10">{project.visual}</div>
                <div className="mt-5 space-y-2"><div className="h-2 w-4/5 rounded bg-white/15"/><div className="h-2 w-3/5 rounded bg-white/10"/></div>
                <div className="mt-5 grid grid-cols-3 gap-2">{[1,2,3].map((n)=><div key={n} className="h-12 rounded-lg border border-white/10 bg-white/[.04]"/>)}</div>
              </div>
            </div>
            <div className="p-5">
              <div className="text-xs font-semibold text-blue-300">{project.category}</div>
              <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
            </div>
          </article>)}
        </div>
      </section>

      <section id="process" className="section-wrap">
        <SectionHeading label={t.processLabel} title={t.processTitle} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step) => <div key={step.number} className="process-card">
            <div className="text-sm font-bold text-blue-300">{step.number}</div>
            <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
          </div>)}
        </div>
      </section>

      <section id="contact" className="section-wrap pb-24">
        <div className="contact-panel grid gap-10 p-6 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:p-14">
          <div>
            <div className="section-label"><span className="h-1.5 w-1.5 rounded-full bg-blue-400"/>{t.contactLabel}</div>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">{t.contactTitle}</h2>
            <p className="mt-5 max-w-md leading-8 text-muted">{t.contactText}</p>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04]"><Sparkles size={18} className="text-blue-300"/></span>
              <span>{rtl ? "كل التفاصيل تبدأ بمحادثة واضحة." : "Every great solution starts with a clear conversation."}</span>
            </div>
          </div>
          <ContactForm locale={locale} copy={t} />
        </div>
      </section>
      <Footer locale={locale} text={t.footerText} rights={t.footerRights} />
    </main>
  );
}
