import { Target, Compass, Users, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import SiteImage from '../components/ui/SiteImage';
import Reveal from '../components/ui/Reveal';
import { imagePaths } from '../config/imagePaths';
import { expertises } from '../data/expertises';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const steps = [
  { title: 'Écouter', text: 'Comprendre le bâtiment, ses usages et vos contraintes d’exploitation.' },
  { title: 'Concevoir', text: 'Proposer une architecture cohérente entre réseau, sûreté et gestion technique.' },
  { title: 'Installer', text: 'Déployer, paramétrer et relier les équipements avec soin.' },
  { title: 'Accompagner', text: 'Mettre en service, expliquer et rester disponible pour la suite.' },
];

const commitments = [
  'Des recommandations adaptées au besoin réel, sans surdimensionnement.',
  'Des installations documentées et compréhensibles par vos équipes.',
  'Des solutions choisies pour leur compatibilité et leur pérennité.',
  'Un interlocuteur identifié du premier échange à la mise en service.',
];

export default function About() {
  useDocumentTitle('À propos', 'Helink intègre et installe des infrastructures télécoms et réseaux, des solutions de sûreté et des systèmes de GTEB.');

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'À propos' }]}
        label="À propos de Helink"
        title="Connecter les infrastructures, simplifier le quotidien"
        description="Helink est une société d'intégration et d'installation d'infrastructures télécoms et réseaux, de solutions de sûreté et de systèmes de Gestion Technique et Énergétique du Bâtiment (GTEB)."
        image={imagePaths.company.team}
        imageAlt="Équipe en réunion de travail"
      />

      {/* Présentation */}
      <section className="container-site py-20 sm:py-24" aria-labelledby="presentation-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading label="Présentation" title={<span id="presentation-title">Un intégrateur, trois métiers complémentaires</span>} />
          <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>Un bâtiment moderne fait cohabiter de nombreux systèmes : réseau informatique, téléphonie, caméras, contrôle d'accès, éclairage, chauffage, ventilation. Trop souvent, ils sont installés séparément et ne communiquent pas.</p>
            <p>Helink réunit ces compétences pour concevoir des installations qui fonctionnent ensemble, avec une seule logique et un seul interlocuteur.</p>
          </div>
        </div>
        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {expertises.map((e) => (
            <li key={e.id} className="rounded-2xl border border-line bg-white p-6">
              <e.icon className="h-6 w-6 text-electric" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold">{e.shortTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Mission + approche */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SiteImage src={imagePaths.company.technicianElectrician} alt="Technicien intervenant sur un tableau électrique" ratio="aspect-[4/3] lg:aspect-[4/5]" className="rounded-2xl" />
          </Reveal>
          <div className="space-y-12 lg:col-span-7">
            <div>
              <p className="label flex items-center gap-2"><Target className="h-4 w-4" aria-hidden="true" /> Notre mission</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Rendre les bâtiments plus sûrs, mieux connectés et plus économes</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">Nous mettons la technologie au service de ceux qui occupent et exploitent les bâtiments : des installations fiables, simples à utiliser et pensées pour durer.</p>
            </div>
            <div>
              <p className="label flex items-center gap-2"><Compass className="h-4 w-4" aria-hidden="true" /> Notre approche technique</p>
              <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                {steps.map((s, i) => (
                  <li key={s.title} className="rounded-xl border border-line bg-paper p-5">
                    <span className="font-display text-sm font-bold text-electric">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-base font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Accompagnement + engagements */}
      <section className="container-site py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label flex items-center gap-2"><Users className="h-4 w-4" aria-hidden="true" /> Notre accompagnement</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">À vos côtés, du conseil à la mise en service</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">Chaque projet commence par un échange sur vos besoins. Nous vous accompagnons ensuite dans les choix techniques, l'installation et la prise en main des systèmes, puis restons disponibles pour faire évoluer vos installations.</p>
            <SiteImage src={imagePaths.company.openOffice} alt="Plateau de bureaux équipé" ratio="aspect-[16/9]" className="mt-8 rounded-2xl" />
          </div>
          <div className="rounded-3xl bg-night p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Nos engagements</h2>
            <ul className="mt-8 space-y-5">
              {commitments.map((c) => (
                <li key={c} className="flex gap-3.5 text-night-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric" aria-hidden="true" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
