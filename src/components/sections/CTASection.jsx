import { ArrowRight, Phone } from 'lucide-react';
import Button from '../ui/Button';
import SiteImage from '../ui/SiteImage';
import { imagePaths } from '../../config/imagePaths';
import { siteConfig } from '../../config/siteConfig';

export default function CTASection({
  title = 'Parlons de votre projet',
  description = "Vous préparez un projet d'infrastructure, de réseau ou de sécurité ? Échangeons sur vos besoins.",
  buttonLabel = 'Nous contacter',
  label,
}) {
  return (
    <section className="container-site py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-night">
        <SiteImage src={imagePaths.hero.buildingNight} alt="" ratio={null} dark className="!absolute inset-0 h-full w-full" imgClassName="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/90 to-night/40" aria-hidden="true" />
        <div className="relative flex flex-col gap-8 px-6 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div className="max-w-xl">
            {label && <p className="label mb-3 text-electric-100">{label}</p>}
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-night-100 sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button to="/contact" size="lg" icon={ArrowRight}>{buttonLabel}</Button>
            <Button href={`tel:${siteConfig.contact.phoneHref}`} size="lg" variant="ghostLight">
              <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.contact.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
