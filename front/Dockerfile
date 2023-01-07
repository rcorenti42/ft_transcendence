FROM node:lts

WORKDIR /app

RUN apt-get update
RUN npm -g add @vue/cli
RUN npm -g i vite

ENTRYPOINT ["/bin/sh", "-c", "npm i -g npm@latest && exec npm run prod"]