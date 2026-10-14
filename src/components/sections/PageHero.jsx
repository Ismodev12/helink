import Breadcrumbs from '../ui/Breadcrumbs';
import SiteImage from '../ui/SiteImage';
import { cn } from '../../utils/cn';

/** Hero secondaire compacte des pages intérieures. */
export default function PageHero({ label, title, description, breadcrumbs = [], image, imageAlt = '', children }) {
  return (
    <section className="relative overflow-hidden bg-night text-white">
      <div className={cn('container-site relative grid items-center gap-10 py-12 sm:py-14 lg:py-16', image && 'lg:grid-cols-12')}>
        <div className={cn(image ? 'lg:col-span-7' : 'max-w-3xl')}>
          <Breadcrumbs items={breadcrumbs} />
          {label && <p className="label mt-8 text-electric-100">{label}</p>}
          <h1 className={cn('text-3xl font-extrabold leading-tight text-white sm:text-[2.6rem]', label ? 'mt-3' : 'mt-8')}>{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-night-100 sm:text-lg">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <SiteImage src={image} alt={imageAlt} ratio="aspect-[16/10] lg:aspect-[4/3]" priority dark className="rounded-2xl ring-1 ring-white/10" />
          </div>
        )}
      </div>
    </section>
  );
}
