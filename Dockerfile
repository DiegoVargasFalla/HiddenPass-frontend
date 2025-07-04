# Etapa de build 
FROM node:20-alpine AS build-stage

WORKDIR /app
COPY . .
RUN npm install
RUN npm build

# Etapa de producción
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]