import { useMemo, useState } from 'react';
import { Search, X, MessageSquare } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import { faqCategories } from '../data/faq';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { cn } from '../utils/cn';

const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export default function FAQ() {
  useDocumentTitle('FAQ', 'Questions fréquentes sur les réseaux, la sûreté, la GTEB et le déroulement des projets Helink.');
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return faqCategories
      .filter((c) => active === 'all' || c.id === active)
      .map((c) => ({ ...c, items: q ? c.items.filter((i) => normalize(i.q + ' ' + i.a).includes(q)) : c.items }))
      .filter((c) => c.items.length);
  }, [active, query]);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'FAQ' }]}
        label="Questions fréquentes"
        title="Vos questions, nos réponses"
        description="Retrouvez les réponses aux questions les plus courantes sur nos domaines d'intervention et le déroulement d'un projet."
      />

      <div className="container-site grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
        <aside className="min-w-0 lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <label htmlFor="faq-search" className="mb-2 block font-display text-sm font-semibold">Rechercher une question</label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-mute" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex. Wi-Fi, maintenance…"
                className="w-full rounded-lg border border-line bg-white py-3 pl-10 pr-10 text-[0.95rem] focus:border-electric focus:outline-none focus:ring-4 focus:ring-electric/15"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} aria-label="Effacer la recherche" className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-ink-mute hover:bg-paper">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <h2 className="mb-3 mt-8 font-display text-sm font-bold uppercase tracking-label text-ink-mute">Thèmes</h2>
            <div role="group" aria-label="Filtrer par thème" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
              {[{ id: 'all', title: 'Toutes les questions' }, ...faqCategories].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active === c.id}
                  onClick={() => setActive(c.id)}
                  className={cn(
                    'shrink-0 rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-colors',
                    active === c.id ? 'border-night bg-night text-white' : 'border-line bg-white text-ink-soft hover:border-night/30 hover:text-ink'
                  )}
                >
                  {c.title}
                </button>
              ))}
            </div>

            <div className="mt-8 hidden rounded-2xl bg-night p-6 text-white lg:block">
              <MessageSquare className="h-6 w-6 text-electric" aria-hidden="true" />
              <p className="mt-4 font-display text-lg font-bold">Vous ne trouvez pas votre réponse ?</p>
              <p className="mt-2 text-sm text-night-100">Posez-nous directement votre question.</p>
              <Button to="/contact" className="mt-5 w-full">Nous contacter</Button>
            </div>
          </div>
        </aside>

        <div className="min-w-0 space-y-12 lg:col-span-8" aria-live="polite">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center">
              <p className="font-display text-lg font-bold">Aucune question ne correspond à « {query} »</p>
              <p className="mt-2 text-sm text-ink-soft">Essayez un autre mot-clé ou posez-nous directement votre question.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="outline" onClick={() => { setQuery(''); setActive('all'); }}>Réinitialiser</Button>
                <Button to="/contact">Poser ma question</Button>
              </div>
            </div>
          ) : (
            filtered.map((c) => (
              <section key={c.id} id={c.id} aria-labelledby={`${c.id}-t`}>
                <h2 id={`${c.id}-t`} className="mb-5 text-xl font-bold sm:text-2xl">{c.title}</h2>
                <FAQAccordion key={query + active} items={c.items} />
              </section>
            ))
          )}

          <div className="rounded-2xl bg-night p-6 text-white lg:hidden">
            <p className="font-display text-lg font-bold">Vous ne trouvez pas votre réponse ?</p>
            <Button to="/contact" className="mt-4 w-full">Nous contacter</Button>
          </div>
        </div>
      </div>
    </>
  );
}
