# Deploy

Sitio estático de Astro (`output: 'static'`, base `/`). Mismo flujo que
tools-astro: se buildea, se empaqueta en una imagen Docker (nginx sirviendo
`dist/`) y se pushea a un registry. El VPS jala la imagen `:latest`.

Rama de despliegue: **`production`**.

## Workflow

`.github/workflows/ci-production.yml` — al hacer push a `production` (o a mano
con *workflow_dispatch*): crea `.env` desde `ENV_FILE`, `npm install`, format,
typecheck, build, calcula versión semántica, y **build + push** de la imagen
Docker (`PROJECT_NAME:<version>` y `PROJECT_NAME:latest`).

> Diferencias con tools-astro: base `/` en vez de `/tools` (Dockerfile copia
> `dist` a la raíz del web root, `nginx.conf` sirve en `/`), y se omite el paso
> de lint (este proyecto no tiene eslint; sí format + typecheck).

## Variables a crear en GitHub

En **Settings → Secrets and variables → Actions → Secrets**:

| # | Nombre            | Valor                                                        |
|---|-------------------|--------------------------------------------------------------|
| 1 | `ENV_FILE`        | El `.env` completo en **base64** (`base64 -i .env`)          |
| 2 | `DOCKER_USER`     | Usuario del registry (Docker Hub)                            |
| 3 | `DOCKER_PASSWORD` | Password / access token del registry                         |
| 4 | `PROJECT_NAME`    | Nombre de la imagen, ej. `usuario/portfolio-v4`              |

`ENV_FILE` debe contener las `PUBLIC_*` de `.env.example`
(`PUBLIC_SITE_URL`, `PUBLIC_WORLD3D_URL`, `PUBLIC_CONTACT_EMAIL`).
Generarlo: `base64 -i .env | pbcopy` y pegar en el secret.

## Docker / VPS

- `Dockerfile` — `FROM nginx:alpine`, copia `dist/` a `/usr/share/nginx/html`
  y `nginx.conf`. Expone el puerto 80.
- En el VPS: el reverse proxy enruta `ismaelhv.com` (raíz) a este contenedor;
  el contenedor jala `PROJECT_NAME:latest` del registry tras cada push.

## Pasos manuales (una vez, contigo)

1. Crear el repo `IsmaellHV/portfolio-frontend-v4` en GitHub.
2. `git push -u origin main` y `git push -u origin production`.
3. Cargar los 4 secretos de la tabla.
4. En el VPS: apuntar el contenedor a `PROJECT_NAME:latest` y el proxy a la raíz.
5. Decidir si v4 reemplaza la raíz `ismaelhv.com` y a dónde queda `v1.ismaelhv.com`.
