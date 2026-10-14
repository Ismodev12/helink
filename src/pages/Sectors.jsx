import PageHero from '../components/sections/PageHero';
import SectorCard from '../components/sections/SectorCard';
import CTASection from '../components/sections/CTASection';
import { sectors } from '../data/sectors';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Sectors() {
  useDocumentTitle("Secteurs d'activité", 'Bureaux, résidentiel, commerces, sites techniques, établissements collectifs : des solutions adaptées à chaque environnement.');

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Secteurs d'activité" }]}
        label="Secteurs d'activité"
        title="Des solutions adaptées à chaque environnement professionnel"
        description="Chaque bâtiment a ses contraintes d'usage, de sécurité et d'exploitation. Voici comment nos trois expertises répondent aux besoins les plus courants."
      >
        <nav aria-label="Accès rapide aux secteurs">
          <ul className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5">
                  <s.icon className="h-4 w-4 text-electric" aria-hidden="true" /> {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="container-site space-y-20 py-20 sm:space-y-28 sm:py-24">
        {sectors.map((s, i) => <SectorCard key={s.id} sector={s} reversed={i % 2 === 1} />)}
      </div>

      <CTASection title="Votre environnement n'apparaît pas ici ?" description="Décrivez-nous votre bâtiment et vos contraintes : nous étudierons la solution la plus adaptée." />
    </>
  );
}
