import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn('h-8 w-8 shrink-0', className)}>
      <rect width="32" height="32" rx="8" fill="#168BFF" />
      <path d="M9.5 12.5a9 9 0 0 1 13 0M12.3 15.2a5 5 0 0 1 7.4 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="18.5" r="2.6" fill="#fff" />
      <path d="M16 21v5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ inverted = false, className, onClick }) {
  return (
    <Link to="/" onClick={onClick} className={cn('inline-flex items-center gap-2.5', className)} aria-label="Helink — retour à l'accueil">
      <LogoMark />
      <span className={cn('font-display text-xl font-extrabold tracking-tight', inverted ? 'text-white' : 'text-night')}>
        helink
      </span>
    </Link>
  );
}
