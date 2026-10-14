import { Link } from 'react-router-dom';
import { ArrowLeft, Unplug } from 'lucide-react';
import Button from '../components/ui/Button';
import { mainNav } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page introuvable');
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-night text-electric">
        <Unplug className="h-8 w-8" aria-hidden="true" />
      </span>
      <p className="label mt-8">Erreur 404</p>
      <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Cette page semble déconnectée</h1>
      <p className="mt-4 max-w-md text-ink-soft">La page demandée n'existe pas ou a été déplacée. Voici quelques liens pour reprendre la navigation.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button to="/" size="lg"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Retour à l'accueil</Button>
        <Button to="/contact" size="lg" variant="outline">Nous contacter</Button>
      </div>
      <nav aria-label="Pages principales" className="mt-12">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {mainNav.slice(1).map((i) => (
            <li key={i.to}><Link to={i.to} className="text-ink-soft hover:text-electric">{i.label}</Link></li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
