import {
  Network, Wifi, Phone, Video, BellRing, Cctv, KeyRound, ShieldAlert, MonitorPlay,
  Lightbulb, Thermometer, Blinds, Workflow, Gauge, MonitorCog, RadioTower, ShieldCheck, Building2,
} from 'lucide-react';
import { imagePaths } from '../config/imagePaths';

export const expertises = [
  {
    id: 'telecoms-reseaux',
    icon: RadioTower,
    shortTitle: 'Télécoms & réseaux',
    title: 'Infrastructures télécoms et réseaux',
    summary:
      "Conception, installation et maintenance d'infrastructures réseau et télécoms pour une connectivité fiable et performante.",
    intro:
      'Des infrastructures fiables et performantes pour assurer la connectivité de vos équipements et de vos bâtiments.',
    image: imagePaths.services.networkInfrastructure,
    imageAlt: 'Baie informatique avec câblage réseau structuré',
    services: [
      { icon: Network, title: 'Réseau informatique', text: 'Conception, installation et administration de réseaux locaux et étendus, liens opérateurs, passerelles de sécurité et réseaux virtuels (VLAN).' },
      { icon: Wifi, title: 'Wi-Fi professionnel', text: 'Étude de couverture sur plan puis vérification sur site, pour un réseau sans fil adapté à l’usage réel du bâtiment.' },
      { icon: Phone, title: "Téléphonie d'entreprise", text: 'Téléphonie IP et communications unifiées : postes fixes, DECT, postes Wi-Fi et équipements de salle de réunion.' },
      { icon: Video, title: 'Visioconférence', text: 'Équipement de postes individuels, petites salles de réunion et salles de conseil.' },
      { icon: BellRing, title: 'Interphonie', text: 'Interphones avec ou sans caméra, reliés à la téléphonie, à un poste intérieur ou à un smartphone.' },
    ],
  },
  {
    id: 'surete',
    icon: ShieldCheck,
    shortTitle: 'Sûreté des bâtiments',
    title: 'Solutions de sûreté',
    summary:
      'Vidéosurveillance, contrôle d’accès, anti-intrusion et solutions de sécurité connectées.',
    intro:
      'Protégez vos bâtiments et vos occupants grâce à des solutions de sécurité adaptées à vos besoins.',
    image: imagePaths.services.videoSurveillance,
    imageAlt: 'Caméras de vidéosurveillance installées sur une façade',
    services: [
      { icon: Cctv, title: 'Vidéosurveillance', text: 'Caméras fixes, motorisées ou thermiques, intérieures et extérieures, avec analyse vidéo selon les besoins.' },
      { icon: KeyRound, title: "Contrôle d'accès", text: 'Lecteurs de badge et claviers à code, gestion centralisée des droits et des plages horaires.' },
      { icon: ShieldAlert, title: 'Anti-intrusion', text: 'Détecteurs de mouvement, d’ouverture ou de bris de vitre raccordés à une centrale d’alarme.' },
      { icon: MonitorPlay, title: 'Logiciel de gestion vidéo', text: 'Supervision et centralisation des flux, interfaçage avec le contrôle d’accès et l’anti-intrusion.' },
    ],
  },
  {
    id: 'domotique-gteb',
    icon: Building2,
    shortTitle: 'Domotique & GTEB',
    title: 'Domotique et GTEB',
    summary:
      'Gestion technique du bâtiment, éclairage, chauffage, ventilation, climatisation et pilotage énergétique.',
    intro:
      'Des bâtiments plus intelligents et plus économes grâce à une gestion technique centralisée et automatisée.',
    image: imagePaths.services.smartBuilding,
    imageAlt: 'Thermostat connecté fixé au mur',
    services: [
      { icon: Lightbulb, title: 'Éclairage intelligent', text: 'Commutation ou variation, détection de présence et prise en compte de la luminosité naturelle.' },
      { icon: Thermometer, title: 'Chauffage, ventilation et climatisation', text: 'Températures de consigne et modes de fonctionnement pièce par pièce ou par bâtiment.' },
      { icon: Blinds, title: 'Gestion des ouvrants et stores', text: 'Commande centralisée des stores, volets et brise-soleil, asservie à la météo si besoin.' },
      { icon: Workflow, title: 'Scénarios automatisés', text: 'Ambiances, modes absence ou simulation de présence pilotant éclairage, chauffage et ouvrants.' },
      { icon: Gauge, title: 'Mesures et supervision énergétique', text: 'Température, humidité, CO₂ et compteurs communicants pour suivre les consommations.' },
      { icon: MonitorCog, title: 'Gestion technique et suivi des équipements', text: 'Interface de supervision locale ou à distance, avec notifications sur événement.' },
    ],
  },
];

export const getExpertise = (id) => expertises.find((e) => e.id === id);
