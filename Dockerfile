FROM node:dubnium-alpine3.11
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install serve
RUN npm install pg --save
RUN npm install -g sequelize-cli
RUN npm build
RUN npx sequelize-cli db:migrate
EXPOSE 5000
CMD ["node", "index.js"]
