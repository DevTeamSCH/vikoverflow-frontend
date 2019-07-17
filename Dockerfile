FROM node:8.15-alpine

RUN mkdir /code
WORKDIR /code
COPY package.json yarn.lock /code/
RUN yarn

COPY ./src ./public /code/

ENV CHOKIDAR_USEPOLLING=true
ENTRYPOINT [ "yarn", "start" ]
