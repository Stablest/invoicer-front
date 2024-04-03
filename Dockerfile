FROM node:20-alpine as build

RUN apk update && apk add dumb-init

WORKDIR /app

COPY --chown=node:node ./package-lock.json ./package.json /app/

RUN npm install

#########
# DEV BUILD
########

FROM build as dev

WORKDIR /app

COPY . /app/

CMD dumb-init npx vite
