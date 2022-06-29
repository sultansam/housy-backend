FROM node:dubnium-alpine3.11
WORKDIR /usr/src/app
COPY . .
ENV DATABASE_URL postgres://root:root@103.55.37.194/housy
ENV NODE_ENV production

RUN npm install
RUN npm install serve
RUN npm install pg --save
RUN npm install -g sequelize-cli
RUN npm build
RUN sequelize-cli db:migrate --env production

EXPOSE 5000
CMD ["node", "index.js"]
