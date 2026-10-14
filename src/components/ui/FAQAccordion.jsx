import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../../utils/cn';

/** Accordéon accessible : boutons natifs (clavier : Tab, Entrée, Espace), aria-expanded / aria-controls. */
export default function FAQAccordion({ items, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-display text-base font-semibold text-ink transition-colors hover:bg-paper sm:px-6"
              >
                {item.q}
                <Plus className={cn('h-5 w-5 shrink-0 text-electric transition-transform duration-300', open && 'rotate-45')} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn('grid transition-[grid-template-rows] duration-300 ease-out', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
            >
              <div className={cn('overflow-hidden transition-[visibility] duration-300', !open && 'invisible')}>
                <p className="max-w-prose px-5 pb-6 text-[0.95rem] leading-relaxed text-ink-soft sm:px-6">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
