/**
 * Informations centrales de l'entreprise.
 * Les valeurs `null` sont des informations à compléter : elles sont
 * automatiquement masquées sur le site ou signalées « à compléter ».
 */
export const siteConfig = {
  name: 'Helink',
  tagline: 'Solutions communicantes et intelligentes pour le bâtiment',
  description:
    "Intégrateur et installateur d'infrastructures télécoms et réseaux, de solutions de sûreté et de systèmes de Gestion Technique et Énergétique du Bâtiment (GTEB).",

  // Coordonnées reprises de l'ancien site
  contact: {
    addressLine1: '47 Rue Cassiopée',
    postalCode: '74650',
    city: 'Chavanod',
    country: 'France',
    phone: '04 80 48 04 40',
    phoneHref: '+33480480440',
    email: 'contact@helink.fr',
    openingHours: null, // ex. « Du lundi au vendredi, 8h30 – 18h00 »
  },

  // Renseigner les URL pour afficher les icônes dans le pied de page
  social: {
    linkedin: null,
    facebook: null,
    instagram: null,
    youtube: null,
  },

  // Informations légales — à compléter, ne rien inventer
  legal: {
    companyName: 'Helink',
    legalForm: null, // ex. SAS, SARL…
    capital: null,
    rcs: null,
    siret: null,
    vatNumber: null,
    publicationDirector: null,
    host: {
      name: null, // ex. Netlify, Inc.
      address: null,
      website: null,
    },
    dpoEmail: null, // contact données personnelles, sinon l'e-mail général est utilisé
  },
};

export const mainNav = [
  { label: 'Accueil', to: '/' },
  { label: 'Expertises', to: '/expertises' },
  { label: "Secteurs d'activité", to: '/secteurs-activite' },
  { label: 'Partenaires', to: '/partenaires' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export const fullAddress = (c = siteConfig.contact) =>
  `${c.addressLine1}, ${c.postalCode} ${c.city}`;
