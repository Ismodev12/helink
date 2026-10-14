import { Link } from 'react-router-dom';
import PageHero from '../components/sections/PageHero';
import { LegalSection, DraftNotice, Value } from './Legal';
import { siteConfig } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Privacy() {
  useDocumentTitle('Politique de confidentialité');
  const { legal, contact } = siteConfig;
  const dataEmail = legal.dpoEmail || contact.email;

  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Politique de confidentialité' }]} title="Politique de confidentialité" description="Comment les données transmises via ce site sont utilisées et protégées." />
      <div className="container-site max-w-3xl space-y-10 py-16 sm:py-20">
        <DraftNotice>Contenu provisoire, à faire valider avant la mise en ligne. Il ne garantit pas à lui seul la conformité du site à la réglementation (RGPD).</DraftNotice>

        <LegalSection title="Responsable du traitement">
          <p>{legal.companyName}, {contact.addressLine1}, {contact.postalCode} {contact.city}. Forme juridique : <Value>{legal.legalForm}</Value></p>
        </LegalSection>

        <LegalSection title="Données éventuellement collectées">
          <p>Via le formulaire de contact : nom et prénom, entreprise (facultatif), adresse e-mail, téléphone (facultatif), type de besoin et description du projet.</p>
          <p>Dans sa version actuelle, le formulaire ne transmet aucune donnée : les informations restent dans votre navigateur. Cette section devra être mise à jour lors du raccordement à un service d'envoi.</p>
          <p>Cookies et outils de mesure d'audience éventuels : <Value>{null}</Value></p>
          <p>Les polices de caractères sont chargées depuis Google Fonts, ce qui transmet votre adresse IP à Google. Elles peuvent être hébergées localement si vous le souhaitez.</p>
        </LegalSection>

        <LegalSection title="Finalités">
          <p>Répondre à vos demandes de contact, d'information ou d'étude de projet, et assurer le suivi de la relation commerciale qui pourrait en découler.</p>
        </LegalSection>

        <LegalSection title="Base légale">
          <p>Votre consentement, exprimé lors de l'envoi du formulaire, et l'intérêt légitime de {legal.companyName} à répondre aux demandes qui lui sont adressées. À confirmer par le responsable du traitement.</p>
        </LegalSection>

        <LegalSection title="Durée de conservation">
          <p>Durée de conservation des demandes de contact : <Value>{null}</Value></p>
        </LegalSection>

        <LegalSection title="Destinataires">
          <p>Les données sont destinées aux seules personnes de {legal.companyName} chargées de traiter votre demande. Elles ne sont ni vendues ni cédées. Sous-traitants techniques éventuels (hébergement, messagerie) : <Value>{null}</Value></p>
        </LegalSection>

        <LegalSection title="Vos droits">
          <p>Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de retirer votre consentement à tout moment.</p>
          <p>Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>
        </LegalSection>

        <LegalSection title="Contact relatif aux données personnelles">
          <p>Pour toute question ou pour exercer vos droits : <a href={`mailto:${dataEmail}`} className="font-medium text-electric hover:underline">{dataEmail}</a>.</p>
          <p>Voir aussi les <Link to="/mentions-legales" className="font-medium text-electric hover:underline">mentions légales</Link>.</p>
        </LegalSection>
      </div>
    </>
  );
}
