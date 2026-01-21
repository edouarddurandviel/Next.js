# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.1

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app


RUN npm install --legacy-peer-deps

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]


