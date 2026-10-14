import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
