export default function ServiceItem({ icon: Icon, title, text }) {
  return (
    <li className="flex gap-4 rounded-xl border border-line bg-white p-5">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-50 text-electric">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h4 className="font-display text-base font-bold text-ink">{title}</h4>
        {text && <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>}
      </div>
    </li>
  );
}
