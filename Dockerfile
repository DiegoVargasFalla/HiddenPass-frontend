# Etapa de build 
FROM node:20-alpine AS build-stage

WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build
EXPOSE 80