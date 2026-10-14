import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from '../ui/Logo';
import { mainNav, siteConfig } from '../../config/siteConfig';
import { expertises } from '../../data/expertises';

const socialIcons = { linkedin: Linkedin, facebook: Facebook, instagram: Instagram, youtube: Youtube };

function FooterTitle({ children }) {
  return <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-label text-white">{children}</h2>;
}

const linkCls = 'text-sm text-night-100 transition-colors hover:text-white';

export default function Footer() {
  const { contact, social } = siteConfig;
  const socials = Object.entries(social).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night-950 text-night-100">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-4">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{siteConfig.description}</p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={key} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 hover:border-white/40">
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="lg:col-span-2">
          <FooterTitle>Navigation</FooterTitle>
          <ul className="space-y-2.5">
            {mainNav.map((i) => (
              <li key={i.to}><Link to={i.to} className={linkCls}>{i.label}</Link></li>
            ))}
            <li><Link to="/a-propos" className={linkCls}>À propos</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterTitle>Expertises</FooterTitle>
          <ul className="space-y-2.5">
            {expertises.map((e) => (
              <li key={e.id}><Link to={`/expertises#${e.id}`} className={linkCls}>{e.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterTitle>Contact</FooterTitle>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" /><span>{contact.addressLine1}<br />{contact.postalCode} {contact.city}</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" /><a href={`tel:${contact.phoneHref}`} className={linkCls}>{contact.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" /><a href={`mailto:${contact.email}`} className={linkCls}>{contact.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.legal.companyName}. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
            <li><Link to="/confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
