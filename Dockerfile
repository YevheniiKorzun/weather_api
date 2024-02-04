FROM node:20

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x wait-for-it.sh

CMD ["./wait-for-it.sh", "postgres:5432", "--", "npm", "run", "start"]
