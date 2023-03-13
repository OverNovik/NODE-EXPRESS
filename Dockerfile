FROM node

WORKDIR /nodeJS

COPY package.json /nodeJS

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "nodeJS/data" ]

CMD [ "node", "index.js" ]