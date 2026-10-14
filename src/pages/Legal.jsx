import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import { siteConfig, fullAddress } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/** Valeur configurable : affichée si renseignée, sinon signalée « à compléter ». */
export function Value({ children }) {
  if (children) return <span className="font-medium text-ink">{children}</span>;
  return <span className="rounded bg-amber-50 px-1.5 py-0.5 text-sm font-medium text-amber-800 ring-1 ring-amber-200">À compléter</span>;
}

export function LegalSection({ title, children }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export function DraftNotice({ children }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

const Row = ({ label, value }) => (
  <div className="grid gap-1 py-2.5 sm:grid-cols-3 sm:gap-4">
    <dt className="text-sm text-ink-mute">{label}</dt>
    <dd className="sm:col-span-2"><Value>{value}</Value></dd>
  </div>
);

export default function Legal() {
  useDocumentTitle('Mentions légales');
  const { legal, contact } = siteConfig;

  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Mentions légales' }]} title="Mentions légales" description="Informations relatives à l'éditeur et à l'hébergeur du site." />
      <div className="container-site max-w-3xl space-y-10 py-16 sm:py-20">
        <DraftNotice>Page provisoire : les champs marqués « À compléter » doivent être renseignés dans <code className="font-mono">src/config/siteConfig.js</code> avant la mise en ligne.</DraftNotice>

        <LegalSection title="Éditeur du site">
          <dl className="divide-y divide-line">
            <Row label="Dénomination" value={legal.companyName} />
            <Row label="Forme juridique" value={legal.legalForm} />
            <Row label="Capital social" value={legal.capital} />
            <Row label="Siège social" value={fullAddress()} />
            <Row label="RCS" value={legal.rcs} />
            <Row label="SIRET" value={legal.siret} />
            <Row label="N° TVA intracommunautaire" value={legal.vatNumber} />
            <Row label="Téléphone" value={contact.phone} />
            <Row label="E-mail" value={contact.email} />
          </dl>
        </LegalSection>

        <LegalSection title="Directeur de la publication">
          <dl><Row label="Nom" value={legal.publicationDirector} /></dl>
        </LegalSection>

        <LegalSection title="Hébergement">
          <dl className="divide-y divide-line">
            <Row label="Hébergeur" value={legal.host.name} />
            <Row label="Adresse" value={legal.host.address} />
            <Row label="Site web" value={legal.host.website} />
          </dl>
        </LegalSection>

        <LegalSection title="Propriété intellectuelle">
          <p>Les contenus du site (textes, mise en page, éléments graphiques) sont la propriété de {legal.companyName}, sauf mention contraire. Les marques citées appartiennent à leurs propriétaires respectifs.</p>
          <p>Photographies : Unsplash (licence Unsplash), en attendant les visuels propres à l'entreprise.</p>
        </LegalSection>

        <LegalSection title="Responsabilité">
          <p>Les informations publiées sont fournies à titre indicatif et peuvent évoluer. {legal.companyName} s'efforce d'en assurer l'exactitude mais ne peut garantir l'absence d'erreurs. Les liens vers des sites tiers n'engagent pas la responsabilité de l'éditeur.</p>
        </LegalSection>

        <LegalSection title="Données personnelles">
          <p>Le traitement des données personnelles est décrit dans notre <Link to="/confidentialite" className="font-medium text-electric hover:underline">politique de confidentialité</Link>.</p>
        </LegalSection>
      </div>
    </>
  );
}
