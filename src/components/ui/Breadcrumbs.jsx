import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Breadcrumbs({ items, inverted = true }) {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className={cn('flex flex-wrap items-center gap-1.5 text-sm', inverted ? 'text-night-100' : 'text-ink-mute')}>
        <li><Link to="/" className="hover:text-white">Accueil</Link></li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} className="hover:text-white">{item.label}</Link>
            ) : (
              <span aria-current="page" className={inverted ? 'text-white' : 'text-ink'}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
