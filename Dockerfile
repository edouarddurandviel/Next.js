# Stage 1: BUILD
FROM node:20.11.1 AS builder
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build
RUN ls -la /usr/src/app/.next

# Stage 2: RUNNER
FROM node:20.11.1  AS runner

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/next.config.ts ./next.config.ts

EXPOSE 3000
ENV NODE_ENV=production

CMD ["npm", "run", "start"]
