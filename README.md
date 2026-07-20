# portfolio-frontend-v4 — Minimal, SEO-first

Portfolio profesional minimalista, 100% estático. HTML completo en build (cero JS de framework), SEO full y bilingüe.

- **Stack**: Astro 5 + Tailwind 4. Sin React, sin islands — solo ~20 líneas de JS inline (theme toggle).
- **i18n**: EN en `/`, ES en `/es/`, hreflang + sitemap i18n.
- **SEO**: JSON-LD (`ProfilePage` + `Person` + `WebSite`), Open Graph, Twitter cards, canonical, robots.txt, sitemap.
- **CV descargable**: `public/cv/Ismael-Hurtado-CV-{EN,ES}.pdf` (botón por idioma).
- **Mundo 3D**: CTA en hero + banner al final + link en footer (`PUBLIC_WORLD3D_URL`).
- **Data compartida**: `src/data/portfolio.ts` es copia exacta de v3 — si cambia allá, re-copiar. Strings propias de v4 viven en `src/data/ui.ts`.

## Dev

```bash
cp .env.example .env
npm install
npm run dev        # http://localhost:5202
npm run build      # astro check + build → dist/
```

## Env

| Variable | Uso |
| --- | --- |
| `PUBLIC_SITE_URL` | Base canónica (OG/sitemap/canonical) |
| `PUBLIC_WORLD3D_URL` | URL del portfolio 3D |
| `PUBLIC_CONTACT_EMAIL` | Email público de contacto |
