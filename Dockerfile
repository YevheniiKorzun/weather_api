FROM node:20

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

CMD ["npm", "run", "migration", "run"]
