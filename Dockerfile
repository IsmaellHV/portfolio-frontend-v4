FROM nginx:alpine

# Astro construyó dist/ con base='/', así que se sirve en la raíz del web root.
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
