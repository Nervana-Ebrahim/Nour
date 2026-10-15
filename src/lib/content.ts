import type { Locale, Project, Service } from "@/types";

const content = {
  ar: {
    nav: [
      { label: "الرئيسية", href: "#home" },
      { label: "خدماتنا", href: "#services" },
      { label: "أعمالنا", href: "#work" },
      { label: "منهجيتنا", href: "#process" },
      { label: "تواصل معنا", href: "#contact" }
    ],
    eyebrow: "LOGIX · حلول برمجية ورقمية",
    heroTitleA: "نحوّل أفكارك",
    heroTitleB: "إلى تجارب رقمية مؤثرة.",
    heroText: "نصمّم ونطوّر مواقع ومنصات رقمية تساعد علامتك التجارية على النمو، وتمنح عملاءك تجربة واضحة وسلسة.",
    primaryCta: "ابدأ مشروعك",
    secondaryCta: "استكشف خدماتنا",
    trustLine: "من الفكرة الأولى إلى الإطلاق وما بعده",
    servicesLabel: "ما الذي نقدمه",
    servicesTitle: "تقنية تخدم أهداف عملك",
    servicesText: "حلول مدروسة تجمع بين التصميم الواضح، والهندسة الموثوقة، وتجربة الاستخدام السلسة.",
    workLabel: "مختارات من أعمالنا",
    workTitle: "كل مشروع يبدأ بفهم التحدّي",
    workText: "هذه نماذج توضيحية للتصميم فقط. استبدلها بمشروعات LOGIX الحقيقية قبل النشر.",
    processLabel: "كيف نعمل",
    processTitle: "خطوات واضحة. نتائج قابلة للقياس.",
    contactLabel: "لديك فكرة؟",
    contactTitle: "لنبنِ شيئًا يستحق أن يُرى.",
    contactText: "شاركنا نبذة عن فكرتك، وسنساعدك على تحديد الخطوة التالية.",
    footerText: "نبني تجارب رقمية تساعد الأعمال على التقدّم.",
    footerRights: "جميع الحقوق محفوظة.",
    formName: "الاسم",
    formEmail: "البريد الإلكتروني",
    formService: "ما الخدمة التي تحتاجها؟",
    formMessage: "احكِ لنا عن مشروعك",
    formSend: "إرسال طلب المشروع",
    formSending: "جارٍ الإرسال...",
    formSuccess: "تم استلام الطلب التجريبي. اربط النموذج بخدمة بريد أو قاعدة بيانات قبل الإطلاق.",
    formError: "تعذّر إرسال الطلب. حاول مرة أخرى.",
    selectService: "اختر الخدمة",
    services: [
      { number: "01", icon: "⌘", title: "تصميم وبرمجة المواقع", description: "مواقع سريعة ومتجاوبة تعكس هوية علامتك وتحوّل الزيارات إلى فرص." },
      { number: "02", icon: "▦", title: "الأنظمة والمنصات", description: "لوحات تحكم وأنظمة مخصصة لتنظيم العمليات وتبسيط العمل اليومي." },
      { number: "03", icon: "✳", title: "تجربة وواجهة المستخدم", description: "واجهات مدروسة تجعل المنتج أوضح وأسهل وأكثر اتساقًا." },
      { number: "04", icon: "↗", title: "المتاجر الإلكترونية", description: "تجارب تجارة إلكترونية مرتبة تساعد العملاء على اكتشاف المنتجات والشراء." }
    ] satisfies Service[],
    projects: [
      { title: "منصة أعمال", category: "منصة رقمية", description: "تصوّر لواجهة منصة خدمات عصرية.", visual: "01", accent: "from-blue-500/30 to-cyan-300/5" },
      { title: "متجر إلكتروني", category: "تجارة إلكترونية", description: "تصوّر لتجربة تسوّق بسيطة وواضحة.", visual: "02", accent: "from-violet-500/25 to-blue-400/5" },
      { title: "لوحة تحكم", category: "نظام إداري", description: "تصوّر للبيانات والعمليات في مساحة واحدة.", visual: "03", accent: "from-cyan-400/20 to-blue-500/5" }
    ] satisfies Project[],
    steps: [
      { number: "01", title: "نستكشف", description: "نفهم أهدافك وجمهورك والتحدّي الذي نعمل على حلّه." },
      { number: "02", title: "نخطط ونصمم", description: "نحدد نطاق العمل ونبني تجربة واضحة قبل التطوير." },
      { number: "03", title: "نطوّر ونختبر", description: "ننفّذ الحل ونختبره عبر الشاشات والسيناريوهات الأساسية." },
      { number: "04", title: "نطلق ونحسّن", description: "نجهّز الإطلاق ونحدد فرص التحسين التالية." }
    ]
  },
  en: {
    nav: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Our process", href: "#process" },
      { label: "Contact", href: "#contact" }
    ],
    eyebrow: "LOGIX · SOFTWARE & DIGITAL SOLUTIONS",
    heroTitleA: "We turn ideas",
    heroTitleB: "into meaningful digital experiences.",
    heroText: "We design and build websites and digital platforms that help brands grow and give their customers a clear, seamless experience.",
    primaryCta: "Start a project",
    secondaryCta: "Explore services",
    trustLine: "From the first idea to launch and beyond",
    servicesLabel: "What we do",
    servicesTitle: "Technology built around your goals",
    servicesText: "Thoughtful solutions combining clear design, reliable engineering, and seamless user experiences.",
    workLabel: "Selected work",
    workTitle: "Every project starts with understanding",
    workText: "These are illustrative design concepts only. Replace them with verified LOGIX projects before launch.",
    processLabel: "How we work",
    processTitle: "Clear steps. Measurable outcomes.",
    contactLabel: "Have an idea?",
    contactTitle: "Let’s build something worth seeing.",
    contactText: "Tell us a little about your idea and we’ll help you define the next step.",
    footerText: "Building digital experiences that move businesses forward.",
    footerRights: "All rights reserved.",
    formName: "Your name",
    formEmail: "Email address",
    formService: "What do you need?",
    formMessage: "Tell us about your project",
    formSend: "Send project inquiry",
    formSending: "Sending...",
    formSuccess: "Demo request received. Connect this form to an email provider or database before launch.",
    formError: "Could not send your request. Please try again.",
    selectService: "Select a service",
    services: [
      { number: "01", icon: "⌘", title: "Web design & development", description: "Fast, responsive websites that reflect your brand and turn visits into opportunities." },
      { number: "02", icon: "▦", title: "Platforms & business systems", description: "Custom dashboards and systems that organize operations and simplify daily work." },
      { number: "03", icon: "✳", title: "UI/UX design", description: "Considered interfaces that make products clearer, easier, and more consistent." },
      { number: "04", icon: "↗", title: "E-commerce", description: "Thoughtful shopping experiences that help customers discover and purchase products." }
    ] satisfies Service[],
    projects: [
      { title: "Business platform", category: "Digital platform", description: "A concept for a modern services platform.", visual: "01", accent: "from-blue-500/30 to-cyan-300/5" },
      { title: "Online store", category: "E-commerce", description: "A concept for a simple, clear shopping journey.", visual: "02", accent: "from-violet-500/25 to-blue-400/5" },
      { title: "Control center", category: "Business system", description: "A concept bringing data and operations into one space.", visual: "03", accent: "from-cyan-400/20 to-blue-500/5" }
    ] satisfies Project[],
    steps: [
      { number: "01", title: "Discover", description: "We learn about your goals, audience, and the challenge to solve." },
      { number: "02", title: "Plan & design", description: "We define scope and shape the experience before development." },
      { number: "03", title: "Build & test", description: "We implement the solution and test key screens and scenarios." },
      { number: "04", title: "Launch & improve", description: "We prepare for launch and identify the next improvements." }
    ]
  }
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}
