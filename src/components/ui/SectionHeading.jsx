import { cn } from '../../utils/cn';

export default function SectionHeading({ label, title, intro, align = 'left', inverted = false, as: Tag = 'h2', className }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {label && <p className={cn('label mb-3', inverted && 'text-electric-100')}>{label}</p>}
      <Tag className={cn('text-3xl font-bold leading-tight sm:text-4xl', inverted && 'text-white')}>{title}</Tag>
      {intro && <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', inverted ? 'text-night-100' : 'text-ink-soft')}>{intro}</p>}
    </div>
  );
}
