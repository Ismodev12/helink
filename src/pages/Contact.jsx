import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/forms/ContactForm';
import { siteConfig } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact', 'Contactez Helink pour votre projet télécoms, réseaux, sûreté ou gestion technique du bâtiment.');
  const { contact } = siteConfig;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contact.addressLine1} ${contact.postalCode} ${contact.city}`)}`;

  const items = [
    { icon: Phone, label: 'Téléphone', value: contact.phone, href: `tel:${contact.phoneHref}` },
    { icon: Mail, label: 'E-mail', value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: 'Adresse', value: `${contact.addressLine1}, ${contact.postalCode} ${contact.city}`, href: mapsUrl, external: true },
    contact.openingHours && { icon: Clock, label: 'Horaires', value: contact.openingHours },
  ].filter(Boolean);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Contact' }]}
        label="Contact"
        title="Parlons de votre projet"
        description="Décrivez-nous vos besoins en télécommunications, en sûreté ou en gestion technique du bâtiment. Nous pourrons ainsi mieux comprendre votre projet."
      />

      <div className="container-site grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <ContactForm />
        </div>

        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-7">
            <h2 className="font-display text-lg font-bold">Nous joindre directement</h2>
            <ul className="mt-6 space-y-5">
              {items.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-50 text-electric"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-label text-ink-mute">{label}</p>
                    {href ? (
                      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="mt-0.5 inline-flex items-center gap-1 break-words font-medium text-ink hover:text-electric">
                        {value} {external && <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
                        {external && <span className="sr-only">(ouvre Google Maps dans un nouvel onglet)</span>}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-night p-6 text-white sm:p-7">
            <h2 className="font-display text-lg font-bold text-white">Comment se passe la suite ?</h2>
            <ol className="mt-5 space-y-4 text-sm text-night-100">
              {['Nous prenons connaissance de votre demande.', 'Nous revenons vers vous pour préciser vos besoins.', 'Nous vous proposons une solution adaptée.'].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric font-display text-xs font-bold text-white">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-night-100">
              Une question rapide ? Consultez la <Link to="/faq" className="font-semibold text-white underline underline-offset-4">FAQ</Link>.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
