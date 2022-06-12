FROM node:16.15.1-alpine

RUN mkdir src

RUN apk update && \
    apk upgrade && \
    apk add git
