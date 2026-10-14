import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteImage from '../ui/SiteImage';

export default function ExpertiseCard({ expertise }) {
  const Icon = expertise.icon;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(8,39,71,0.08)]">
      <SiteImage src={expertise.image} alt={expertise.imageAlt} ratio="aspect-[16/11]" imgClassName="transition-transform duration-700 group-hover:scale-[1.03]" />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric-50 text-electric">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold">{expertise.shortTitle}</h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{expertise.summary}</p>
        <Link
          to={`/expertises#${expertise.id}`}
          className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-electric after:absolute after:inset-0 group-hover:gap-3 transition-all"
          aria-label={`En savoir plus : ${expertise.title}`}
        >
          En savoir plus <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
