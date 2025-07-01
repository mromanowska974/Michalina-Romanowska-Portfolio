FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install node-cron

COPY . .

CMD [ "node", "index.js" ]