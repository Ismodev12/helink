import { BadgeCheck, Puzzle, ShieldCheck, Wrench, Target, Clock } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import PartnerLogo from '../components/ui/PartnerLogo';
import SiteImage from '../components/ui/SiteImage';
import { partners, certifications, selectionCriteria } from '../data/partners';
import { imagePaths } from '../config/imagePaths';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const criteriaIcons = [Puzzle, ShieldCheck, Wrench, Target, Clock];

export default function Partners() {
  useDocumentTitle('Partenaires', "L'écosystème technique de Helink : constructeurs, éditeurs et certifications.");

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Partenaires' }]}
        label="Écosystème technique"
        title="Des technologies qui travaillent ensemble"
        description="Un bâtiment connecté repose sur des équipements qui doivent dialoguer entre eux. Nos partenariats nous permettent d'intégrer des solutions complémentaires, compatibles et suivies dans le temps."
        image={imagePaths.company.engineerServerRoom}
        imageAlt="Ingénieure intervenant dans une salle serveurs"
      />

      <section className="container-site py-20 sm:py-24" aria-labelledby="marques-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              label="Constructeurs et éditeurs"
              title={<span id="marques-title">Avec qui travaillons-nous ?</span>}
              intro="Des marques reconnues dans les réseaux, la sûreté, les communications et l'automatisme du bâtiment."
            />
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4">
            {partners.map((p) => <PartnerLogo key={p.name} partner={p} />)}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="certif-title">
        <div className="container-site">
          <SectionHeading label="Certifications" title={<span id="certif-title">Des compétences validées par les constructeurs</span>} intro="Formations et certifications suivies par l'équipe sur les solutions que nous installons." />
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <li key={c.name} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
                <div className="flex items-center justify-between gap-3">
                  <BadgeCheck className="h-6 w-6 text-electric" aria-hidden="true" />
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-soft ring-1 ring-line">{c.area}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site py-20 sm:py-24" aria-labelledby="criteres-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading label="Notre méthode" title={<span id="criteres-title">Comment nous sélectionnons les solutions</span>} intro="Le choix d'un équipement engage l'installation sur plusieurs années. Nous le faisons selon cinq critères." />
            <ul className="mt-10 space-y-5">
              {selectionCriteria.map((c, i) => {
                const Icon = criteriaIcons[i];
                return (
                  <li key={c.title} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-night text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <div>
                      <h3 className="font-display text-base font-bold">{c.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{c.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <SiteImage src={imagePaths.services.networkInfrastructure} alt="Baies réseau et câblage structuré" ratio="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" className="rounded-2xl" />
        </div>
      </section>

      <CTASection title="Un équipement existant à intégrer ?" description="Nous étudions la compatibilité de vos installations actuelles avec les solutions envisagées." />
    </>
  );
}
