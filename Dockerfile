FROM node:18-alpine3.17

WORKDIR /app

ADD package*.json ./ 

RUN npm install

CMD [ "npm", "start" ]