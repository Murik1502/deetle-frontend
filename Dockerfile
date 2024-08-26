# Build Stage
FROM node:current-alpine3.20 AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

ARG NEXT_PUBLIC_API_DOMAIN
ENV NEXT_PUBLIC_API_DOMAIN=$NEXT_PUBLIC_API_DOMAIN

ARG NEXT_PUBLIC_API_PORT
ENV NEXT_PUBLIC_API_PORT=$NEXT_PUBLIC_API_PORT

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