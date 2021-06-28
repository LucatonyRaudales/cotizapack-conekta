FROM node:14.17.1

WORKDIR /app

COPY  *.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]