import { ImageIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

/** Surface neutre affichée quand une image est absente. */
export default function ImagePlaceholder({ label, dark = false, className }) {
  const showHint = import.meta.env.DEV;
  return (
    <div
      role="img"
      aria-label={label || 'Image à venir'}
      className={cn(
        'absolute inset-0 flex flex-col items-center justify-center gap-2',
        dark ? 'bg-night-700 text-night-100' : 'bg-gradient-to-br from-[#EDF2F8] to-[#E1E8F1] text-ink-mute',
        className
      )}
    >
      <ImageIcon className="h-7 w-7 opacity-60" aria-hidden="true" />
      {showHint && <span className="font-display text-xs font-semibold uppercase tracking-label opacity-80">Image à ajouter</span>}
    </div>
  );
}
