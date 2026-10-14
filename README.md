# Helink — site vitrine (React + Tailwind + React Router)

## Lancer le projet
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère /dist (à déployer sur Netlify)
```
Le fichier `public/_redirects` permet à Netlify de servir toutes les routes (`/expertises`, `/contact`…).

## Pages
| URL | Page |
|---|---|
| `/` | Accueil |
| `/expertises` | Expertises (ancres `#telecoms-reseaux`, `#surete`, `#domotique-gteb`) |
| `/secteurs-activite` | Secteurs d'activité |
| `/partenaires` | Partenaires et certifications |
| `/faq` | FAQ (recherche + filtres + accordéons) |
| `/contact` | Contact (formulaire validé, frontend uniquement) |
| `/a-propos` | À propos |
| `/mentions-legales` | Mentions légales (champs à compléter) |
| `/confidentialite` | Politique de confidentialité (provisoire) |
| autre | Page 404 |

## Où modifier quoi
- **Coordonnées, réseaux sociaux, infos légales** : `src/config/siteConfig.js` (les valeurs `null` sont masquées ou marquées « À compléter »).
- **Images** : `src/config/imagePaths.js` + fichiers dans `public/images/`. Pour remplacer une photo, déposez un fichier au même chemin. Si un fichier manque, une surface neutre s'affiche (mention « Image à ajouter » en mode dev).
- **Textes des expertises / secteurs / FAQ / partenaires** : `src/data/`.
- **Logos partenaires** : ajoutez les fichiers officiels dans `public/images/partners/` puis renseignez `logo` dans `src/data/partners.js`.

## Photos
Les photos actuelles proviennent d'Unsplash (licence Unsplash : usage commercial gratuit, sans attribution obligatoire). Les identifiants d'origine sont listés dans `imageCredits` (`src/config/imagePaths.js`).

## Formulaire de contact
Aucun envoi réel : la soumission est simulée et le message de confirmation invite à écrire à l'adresse e-mail. Pour l'activer sur Netlify, ajoutez Netlify Forms ou un service d'envoi (Formspree, EmailJS, API).

## À vérifier avant la mise en ligne
- Informations légales (forme juridique, SIRET, RCS, directeur de publication, hébergeur).
- Liste des partenaires et certifications (reprises de l'ancien site).
- Secteurs d'activité (catégories éditoriales, sans références clients).
