import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/sections/PageHero';
import ServiceItem from '../components/sections/ServiceItem';
import CTASection from '../components/sections/CTASection';
import SiteImage from '../components/ui/SiteImage';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { expertises } from '../data/expertises';
import { imagePaths } from '../config/imagePaths';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { cn } from '../utils/cn';

const secondaryImages = {
  'telecoms-reseaux': { src: imagePaths.services.networkPatch, alt: 'Panneau de brassage et câbles réseau' },
  surete: { src: imagePaths.services.accessControl, alt: 'Serrure connectée pilotée depuis un smartphone' },
  'domotique-gteb': { src: imagePaths.services.gtebDashboard, alt: 'Tableau de bord de supervision énergétique' },
};

export default function Expertises() {
  useDocumentTitle('Expertises', 'Télécoms et réseaux, sûreté, domotique et GTEB : les solutions techniques de Helink pour vos bâtiments.');

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Expertises' }]}
        label="Nos expertises"
        title="Des solutions techniques pensées pour vos bâtiments"
        description="Nous mettons notre expertise au service de la sécurité, de la connectivité et de la performance énergétique de vos infrastructures."
        image={imagePaths.hero.expertisesTower}
        imageAlt="Tour de bureaux aux façades vitrées"
      >
        <nav aria-label="Accès rapide aux expertises">
          <ul className="flex flex-wrap gap-2">
            {expertises.map((e) => (
              <li key={e.id}>
                <a href={`#${e.id}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5">
                  <e.icon className="h-4 w-4 text-electric" aria-hidden="true" /> {e.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {expertises.map((e, i) => {
        const reversed = i % 2 === 1;
        const second = secondaryImages[e.id];
        return (
          <section key={e.id} id={e.id} aria-labelledby={`${e.id}-title`} className={cn('py-20 sm:py-24', i % 2 === 1 ? 'bg-white' : 'bg-paper')}>
            <div className="container-site">
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                <Reveal className={cn('lg:col-span-5 lg:sticky lg:top-28', reversed && 'lg:order-2')}>
                  <p className="label">Expertise {String(i + 1).padStart(2, '0')}</p>
                  <h2 id={`${e.id}-title`} className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{e.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{e.intro}</p>
                  <div className="relative mt-8 pb-10 sm:pb-12">
                    <SiteImage src={e.image} alt={e.imageAlt} ratio="aspect-[3/2]" className="rounded-2xl" />
                    <SiteImage src={second.src} alt={second.alt} ratio="aspect-[4/3]" className={cn('!absolute bottom-0 w-[42%] rounded-xl border-4 shadow-xl', i % 2 === 1 ? 'border-white' : 'border-paper', reversed ? 'left-4' : 'right-4')} />
                  </div>
                </Reveal>
                <div className={cn('lg:col-span-7', reversed && 'lg:order-1')}>
                  <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-label text-ink-mute">Nos prestations</h3>
                  <ul className="grid gap-3">
                    {e.services.map((s) => <ServiceItem key={s.title} {...s} />)}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button to={`/contact?besoin=${e.id}`} icon={ArrowRight}>Demander une étude</Button>
                    <Button to="/faq" variant="outline">Questions fréquentes</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="container-site pt-16 text-center">
        <p className="text-ink-soft">
          Vous ne savez pas quelle solution correspond à votre bâtiment ? Consultez nos{' '}
          <Link to="/secteurs-activite" className="font-semibold text-electric hover:underline">secteurs d'activité</Link>.
        </p>
      </section>

      <CTASection title="Besoin d'une solution adaptée ?" buttonLabel="Parlons de votre projet" />
    </>
  );
}
