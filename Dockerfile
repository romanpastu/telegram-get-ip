FROM node:14-alpine
WORKDIR /usr/src/app
COPY . ./
RUN npm install
CMD [ "node" ,"bot.js" ]