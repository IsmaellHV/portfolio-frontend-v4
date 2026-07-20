import type { Locale } from '~/data/portfolio';

export const SITE_URL = (import.meta.env.PUBLIC_SITE_URL || 'https://ismaelhv.com').replace(/\/$/, '');
export const WORLD3D_URL = import.meta.env.PUBLIC_WORLD3D_URL || 'https://ismaelhv.com/3d/';
export const CONTACT_EMAIL = import.meta.env.PUBLIC_CONTACT_EMAIL || 'ismaelhurtadov@gmail.com';

export const CV_BY_LOCALE: Record<Locale, string> = {
  en: '/cv/Ismael-Hurtado-CV-EN.pdf',
  es: '/cv/Ismael-Hurtado-CV-ES.pdf',
};

/** Home path per locale — EN lives at the root, ES under /es/. */
export const homePath = (locale: Locale): string => (locale === 'en' ? '/' : '/es/');

/** Older portfolio iterations, newest first. Add v2/v3/city here as they ship. */
export interface PreviousVersion {
  label: string;
  year: string;
  stack: string;
  url: string;
}

export const PREVIOUS_VERSIONS: PreviousVersion[] = [
  { label: 'v1', year: '2024', stack: 'React · Tailwind · Node', url: 'https://v1.ismaelhv.com' },
];

export const absoluteUrl = (path: string): string => `${SITE_URL}${path}`;
