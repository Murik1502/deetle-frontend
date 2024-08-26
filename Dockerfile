# Build Stage
FROM node:current-alpine3.20 AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

ARG API_DOMAIN
ENV API_DOMAIN=$API_DOMAIN

ARG API_PORT
ENV API_PORT=$API_PORT

RUN npm run build


# Production Stage
FROM node:current-alpine3.20 AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production

CMD ["npm", "start"]