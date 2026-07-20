# Deploy

Sitio estático de Astro (`output: 'static'`). El build genera `dist/`.

## CI

`.github/workflows/ci.yml` corre en cada push a `main` y en cada PR:
`npm ci` + `npm run build` (que incluye `astro check`). No publica nada.

## Deploy (pendiente de cablear)

`.github/workflows/deploy.yml` es un **scaffold** para Cloudflare Pages, aún no
operativo. Para activarlo, cuando creemos el proyecto:

1. Crear el proyecto en Cloudflare Pages (o el host que definamos) y anotar su nombre.
2. En GitHub → **Settings → Secrets and variables → Actions**, añadir:
   - `CLOUDFLARE_API_TOKEN` — token con permiso *Cloudflare Pages: Edit*.
   - `CLOUDFLARE_ACCOUNT_ID`.
3. Reemplazar `CHANGE_ME` en `deploy.yml` por el nombre del proyecto de Pages.
4. Configurar en Cloudflare las variables de entorno de producción (ver `.env.example`):
   `PUBLIC_SITE_URL`, `PUBLIC_WORLD3D_URL`, `PUBLIC_CONTACT_EMAIL`.

> Si el host final no es Cloudflare Pages (Vercel, Netlify, VPS, GitHub Pages),
> se reemplaza el paso de publicación por el del host correspondiente.

## Pasos manuales (una vez, contigo)

- Crear el repo en GitHub y hacer `git push -u origin main`.
- Definir la rama de despliegue (hoy los workflows apuntan a `main`).
- Decidir si v4 toma la raíz `ismaelhv.com` y a dónde queda `v1.ismaelhv.com`.
