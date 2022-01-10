FROM node:lts-alpine

WORKDIR /server

COPY ./ ./

RUN npm install

EXPOSE 300

ENTRYPOINT [ "npm", "run", "server" ]