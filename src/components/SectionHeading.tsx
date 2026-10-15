export default function SectionHeading({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="section-label"><span className="h-1.5 w-1.5 rounded-full bg-blue-400"/>{label}</div>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 max-w-xl leading-8 text-muted">{text}</p>}
    </div>
  );
}
