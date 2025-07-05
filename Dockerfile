# Etapa de build 
FROM node:20-alpine AS build-stage

WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build

# solo servir el  contenido
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]