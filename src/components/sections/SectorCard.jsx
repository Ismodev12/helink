import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SiteImage from '../ui/SiteImage';
import Button from '../ui/Button';
import { getExpertise } from '../../data/expertises';
import { cn } from '../../utils/cn';

export default function SectorCard({ sector, reversed = false }) {
  const Icon = sector.icon;
  return (
    <article id={sector.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={cn(reversed && 'lg:order-2')}>
        <SiteImage src={sector.image} alt={sector.imageAlt} ratio="aspect-[4/3]" className="rounded-2xl" />
      </div>
      <div>
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-night text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl">{sector.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">{sector.intro}</p>

        <h3 className="mt-7 font-display text-sm font-bold uppercase tracking-label text-ink-mute">Besoins techniques typiques</h3>
        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {sector.needs.map((n) => (
            <li key={n} className="flex gap-2.5 text-[0.95rem] text-ink">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" /> {n}
            </li>
          ))}
        </ul>

        <h3 className="mt-7 font-display text-sm font-bold uppercase tracking-label text-ink-mute">Solutions pertinentes</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {sector.expertises.map((id) => {
            const e = getExpertise(id);
            return (
              <li key={id}>
                <Link to={`/expertises#${id}`} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-night transition-colors hover:border-electric hover:text-electric">
                  {e.shortTitle} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8">
          <Button to={`/contact?besoin=autre&secteur=${sector.id}`} variant="outline" icon={ArrowRight}>Discuter de mon projet</Button>
        </div>
      </div>
    </article>
  );
}
