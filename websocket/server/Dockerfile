FROM node:alpine

WORKDIR /server
COPY ./ ./

RUN npm install

ENTRYPOINT ["npm", "run", "start"]