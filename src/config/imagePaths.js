/**
 * Tous les chemins d'images du site sont centralisés ici.
 * Pour remplacer une photo : déposez un nouveau fichier au même chemin
 * dans /public/images (ou modifiez le chemin ci-dessous). Aucune page à reconstruire.
 *
 * Si un fichier est absent, le composant <SiteImage> affiche une surface
 * neutre de même dimension (avec la mention « Image à ajouter » en développement).
 *
 * Photos actuelles : Unsplash (licence Unsplash, usage commercial libre).
 * Crédits détaillés dans `imageCredits` ci-dessous.
 */
export const imagePaths = {
  hero: {
    buildingConnected: '/images/hero/building-connected.jpg',
    expertisesTower: '/images/hero/expertises-tower.jpg',
    buildingNight: '/images/hero/building-night.jpg',
  },
  services: {
    networkInfrastructure: '/images/services/network-infrastructure.jpg',
    networkPatch: '/images/services/network-patch.jpg',
    videoSurveillance: '/images/services/video-surveillance.jpg',
    accessControl: '/images/services/access-control.jpg',
    smartBuilding: '/images/services/smart-building.jpg',
    gtebDashboard: '/images/services/gteb-dashboard.jpg',
    electricalPanel: '/images/services/electrical-panel.jpg',
  },
  company: {
    technicianInstallation: '/images/company/technician-installation.jpg',
    technicianElectrician: '/images/company/technician-electrician.jpg',
    team: '/images/company/team.jpg',
    engineerServerRoom: '/images/company/engineer-server-room.jpg',
    openOffice: '/images/company/open-office.jpg',
  },
  sectors: {
    offices: '/images/sectors/offices.jpg',
    residential: '/images/sectors/residential.jpg',
    retail: '/images/sectors/retail.jpg',
    technicalSites: '/images/sectors/technical-sites.jpg',
    publicFacilities: '/images/sectors/public-facilities.jpg',
  },
  partners: {
    // Emplacement réservé : ajoutez ici les logos officiels fournis par les partenaires
    placeholder: '/images/partners/partner-01.svg',
  },
};

/** Identifiants des photos Unsplash d'origine (pour les crédits / remplacement). */
export const imageCredits = {
  'hero/building-connected': 'photo-1486406146926-c627a92ad1ab',
  'hero/expertises-tower': 'photo-1761937841713-6b43e3f50efa',
  'hero/building-night': 'photo-1449157291145-7efd050a4d0e',
  'services/network-infrastructure': 'photo-1558494949-ef010cbdcc31',
  'services/network-patch': 'photo-1544197150-b99a580bb7a8',
  'services/video-surveillance': 'photo-1557597774-9d273605dfa9',
  'services/access-control': 'photo-1558002038-1055907df827',
  'services/smart-building': 'photo-1545259741-2ea3ebf61fa3',
  'services/gteb-dashboard': 'photo-1551288049-bebda4e38f71',
  'services/electrical-panel': 'photo-1544724569-5f546fd6f2b5',
  'company/technician-installation': 'photo-1621905252507-b35492cc74b4',
  'company/technician-electrician': 'photo-1621905251189-08b45d6a269e',
  'company/team': 'photo-1521737604893-d14cc237f11d',
  'company/engineer-server-room': 'photo-1573164713988-8665fc963095',
  'company/open-office': 'photo-1531973576160-7125cd663d86',
  'sectors/offices': 'photo-1497366754035-f200968a6e72',
  'sectors/residential': 'photo-1545324418-cc1a3fa10c00',
  'sectors/retail': 'photo-1441986300917-64674bd600d8',
  'sectors/technical-sites': 'photo-1520869562399-e772f042f422',
  'sectors/public-facilities': 'photo-1562774053-701939374585',
};

/** Préfixe le chemin avec la base de déploiement (utile si le site n'est pas à la racine). */
export const withBase = (path) => {
  if (!path || /^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  return base.replace(/\/$/, '') + path;
};
