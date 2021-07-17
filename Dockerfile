FROM node:alpine
RUN apk update && apk add bash
RUN apk add nano
COPY . /app
COPY package.json /app/package.json

WORKDIR /app

RUN yarn
