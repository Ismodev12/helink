import { Building, Home, Store, Factory, Landmark } from 'lucide-react';
import { imagePaths } from '../config/imagePaths';

/**
 * Catégories éditoriales à confirmer selon l'offre réelle de l'entreprise.
 * Aucune référence client n'est revendiquée.
 */
export const sectors = [
  {
    id: 'bureaux-tertiaire',
    icon: Building,
    title: 'Bureaux et bâtiments tertiaires',
    intro: 'Des espaces de travail connectés, sécurisés et confortables pour les occupants.',
    needs: ['Réseau et Wi-Fi couvrant tous les étages', 'Téléphonie et salles de visioconférence', 'Contrôle d’accès par badge', 'Pilotage de l’éclairage et du CVC'],
    expertises: ['telecoms-reseaux', 'surete', 'domotique-gteb'],
    image: imagePaths.sectors.offices,
    imageAlt: 'Couloir vitré d’un immeuble de bureaux moderne',
  },
  {
    id: 'residentiel',
    icon: Home,
    title: 'Immeubles résidentiels',
    intro: 'Des parties communes mieux sécurisées et des logements plus simples à piloter.',
    needs: ['Interphonie et vidéophonie', 'Contrôle d’accès des halls et parkings', 'Vidéosurveillance des parties communes', 'Domotique des logements'],
    expertises: ['surete', 'telecoms-reseaux', 'domotique-gteb'],
    image: imagePaths.sectors.residential,
    imageAlt: 'Façade d’un immeuble résidentiel',
  },
  {
    id: 'commerces-erp',
    icon: Store,
    title: 'Commerces et espaces recevant du public',
    intro: 'Protéger les biens et les personnes tout en offrant une connectivité fiable.',
    needs: ['Vidéosurveillance intérieure et extérieure', 'Anti-intrusion raccordée à la télésurveillance', 'Wi-Fi public (hotspot)', 'Éclairage et ambiances programmés'],
    expertises: ['surete', 'telecoms-reseaux', 'domotique-gteb'],
    image: imagePaths.sectors.retail,
    imageAlt: 'Intérieur d’une boutique',
  },
  {
    id: 'sites-professionnels',
    icon: Factory,
    title: 'Sites professionnels et locaux techniques',
    intro: 'Des infrastructures robustes pour les environnements où la continuité de service compte.',
    needs: ['Baies et câblage structuré', 'Cloisonnement réseau et sécurité', 'Contrôle d’accès des zones sensibles', 'Mesures et alertes sur les équipements'],
    expertises: ['telecoms-reseaux', 'surete', 'domotique-gteb'],
    image: imagePaths.sectors.technicalSites,
    imageAlt: 'Équipements réseau dans une baie technique',
  },
  {
    id: 'etablissements-collectifs',
    icon: Landmark,
    title: 'Établissements et infrastructures collectives',
    intro: 'Des solutions centralisées pour des bâtiments étendus et très fréquentés.',
    needs: ['Supervision centralisée multi-bâtiments', 'Gestion des accès par profils d’usagers', 'Suivi des consommations énergétiques', 'Réseau Wi-Fi à forte densité'],
    expertises: ['domotique-gteb', 'surete', 'telecoms-reseaux'],
    image: imagePaths.sectors.publicFacilities,
    imageAlt: 'Bâtiment d’un établissement collectif',
  },
];
