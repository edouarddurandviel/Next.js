# Stage 1: Build
FROM node:20.11.1 AS builder

WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy app source code
COPY . .

# Build the app
RUN npm run build

RUN ls -la /usr/src/app/.next

# Stage 2: Production image
FROM node:20.11.1  AS runner

WORKDIR /usr/src/app

# Copy only build outputs + package.json
COPY package.json package-lock.json ./
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/next.config.ts ./next.config.ts

# Expose the default Next.js port
EXPOSE 3000

# Use production environment
ENV NODE_ENV=production

# Start the Next.js server
CMD ["npm", "run", "start"]
