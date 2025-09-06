FROM node:20.12.0 AS builder

WORKDIR /app
COPY *.json ./
COPY *.js ./
COPY *.ts ./
COPY *.mjs ./

RUN npm i husky && npm i