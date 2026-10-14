import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import SiteImage from '../ui/SiteImage';
import { imagePaths } from '../../config/imagePaths';

/** Hero principale de l'accueil : texte à gauche, photo à droite, fond bleu nuit. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-night text-white">
      {/* trame discrète rappelant les réseaux */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#fff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container-site relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-6">
          <p className="label mb-5 text-electric-100">Intégrateur de solutions techniques</p>
          <h1 className="text-[2.15rem] font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Des bâtiments plus intelligents, plus sûrs et mieux connectés.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-night-100 sm:text-lg">
            Intégrateur et installateur d'infrastructures télécoms et réseaux, de solutions de sûreté et de gestion technique et énergétique du bâtiment.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" size="lg" icon={ArrowRight}>Parlons de votre projet</Button>
            <Button to="/expertises" size="lg" variant="ghostLight">Découvrir nos expertises</Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <SiteImage
              src={imagePaths.hero.buildingConnected}
              alt="Immeubles de bureaux modernes vus en contre-plongée"
              ratio="aspect-[4/3] lg:aspect-[5/4]"
              priority
              dark
              className="rounded-2xl ring-1 ring-white/10"
            />
            <div className="absolute -bottom-5 left-4 right-4 hidden rounded-xl border border-white/10 bg-night-900/90 p-4 backdrop-blur sm:left-6 sm:right-auto sm:block sm:max-w-xs">
              <p className="font-display text-sm font-semibold text-white">Réseaux · Sûreté · GTEB</p>
              <p className="mt-1 text-xs leading-relaxed text-night-100">Trois métiers intégrés pour un bâtiment qui fonctionne comme un tout.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
