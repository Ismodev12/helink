import { Link } from 'react-router-dom';
import { ArrowRight, Award, Layers, Handshake, ClipboardCheck, Wrench, LifeBuoy } from 'lucide-react';
import Hero from '../components/sections/Hero';
import ExpertiseCard from '../components/sections/ExpertiseCard';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import SiteImage from '../components/ui/SiteImage';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { expertises } from '../data/expertises';
import { sectors } from '../data/sectors';
import { imagePaths } from '../config/imagePaths';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const values = [
  { icon: Award, title: 'Expertise technique', text: 'Une équipe qualifiée et expérimentée.' },
  { icon: Layers, title: 'Solutions intégrées', text: 'Des infrastructures et des systèmes conçus pour fonctionner ensemble.' },
  { icon: Handshake, title: 'Accompagnement de proximité', text: 'Du conseil à la mise en service, nous accompagnons chaque étape.' },
];

const approach = [
  { icon: ClipboardCheck, title: 'Conseil & audit', text: 'Analyse de l’existant et de vos besoins avant toute proposition.' },
  { icon: Wrench, title: 'Installation & intégration', text: 'Déploiement des équipements et mise en relation des systèmes.' },
  { icon: LifeBuoy, title: 'Maintenance & support', text: 'Suivi des installations après la mise en service, selon vos besoins.' },
];

export default function Home() {
  useDocumentTitle(null);

  return (
    <>
      <Hero />

      {/* C. Bandeau de valeurs */}
      <section aria-label="Nos engagements" className="border-b border-line bg-white">
        <ul className="container-site grid divide-y divide-line py-4 sm:py-0 md:grid-cols-3 md:divide-x md:divide-y-0">
          {values.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 py-6 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-electric-50 text-electric">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-base font-bold">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* D. Expertises */}
      <section className="container-site py-20 sm:py-24" aria-labelledby="expertises-title">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading label="Nos expertises" title={<span id="expertises-title">Des solutions complètes pour vos infrastructures</span>} />
          <Button to="/expertises" variant="outline" icon={ArrowRight} className="self-start md:self-auto">Toutes nos expertises</Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertises.map((e) => (
            <Reveal key={e.id}><ExpertiseCard expertise={e} /></Reveal>
          ))}
        </div>
      </section>

      {/* E. Notre approche */}
      <section className="bg-white py-20 sm:py-24" aria-labelledby="approche-title">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <SiteImage src={imagePaths.company.technicianInstallation} alt="Technicien intervenant sur une installation électrique" ratio="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" className="rounded-2xl" />
            <SiteImage src={imagePaths.services.networkPatch} alt="Câblage d'un panneau de brassage réseau" ratio="aspect-square" className="!absolute -bottom-8 -right-4 hidden w-44 rounded-xl border-4 border-white shadow-xl sm:block lg:-right-8 lg:w-52" />
          </Reveal>
          <div>
            <SectionHeading
              label="Notre approche"
              title={<span id="approche-title">Des solutions sur mesure et une expertise terrain</span>}
              intro="Nous concevons et déployons des solutions adaptées à chaque projet, en alliant technologie, sécurité et performance énergétique. Notre équipe intervient sur le terrain avec rigueur et réactivité pour contribuer à la continuité et à la fiabilité de vos infrastructures."
            />
            <ol className="mt-10 space-y-4">
              {approach.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="flex gap-5 rounded-xl border border-line bg-paper p-5">
                  <span className="font-display text-sm font-bold text-electric">0{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 font-display text-base font-bold">
                      <Icon className="h-4 w-4 text-night" aria-hidden="true" /> {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/a-propos" className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-electric hover:gap-3 transition-all">
              Découvrir Helink <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Secteurs — accès rapide */}
      <section className="container-site pt-24 sm:pt-28" aria-labelledby="secteurs-title">
        <SectionHeading label="Secteurs d'activité" title={<span id="secteurs-title">Des solutions adaptées à chaque environnement</span>} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {sectors.map(({ id, icon: Icon, title }) => (
            <li key={id}>
              <Link to={`/secteurs-activite#${id}`} className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-line bg-white p-5 transition-colors hover:border-electric/50">
                <Icon className="h-6 w-6 text-electric" aria-hidden="true" />
                <span className="flex items-end justify-between gap-3 font-display text-[0.95rem] font-semibold leading-snug text-ink">
                  {title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-mute transition-transform group-hover:translate-x-1 group-hover:text-electric" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
