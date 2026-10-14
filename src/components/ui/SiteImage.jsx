import { useState } from 'react';
import { withBase } from '../../config/imagePaths';
import ImagePlaceholder from './ImagePlaceholder';
import { cn } from '../../utils/cn';

/**
 * Image qui conserve ses dimensions même si le fichier manque.
 * `ratio` : classe Tailwind d'aspect (ex. 'aspect-[4/3]'), ou null si le parent fixe la taille.
 */
export default function SiteImage({ src, alt = '', ratio = 'aspect-[4/3]', priority = false, dark = false, className, imgClassName, children }) {
  const [status, setStatus] = useState(src ? 'loading' : 'error');

  return (
    <div className={cn('relative overflow-hidden', dark ? 'bg-night-700' : 'bg-[#E6ECF3]', ratio, className)}>
      {status !== 'error' && (
        <img
          src={withBase(src)}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : undefined}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            status === 'loaded' ? 'opacity-100' : 'opacity-0',
            imgClassName
          )}
        />
      )}
      {status === 'error' && <ImagePlaceholder label={alt} dark={dark} />}
      {children}
    </div>
  );
}
