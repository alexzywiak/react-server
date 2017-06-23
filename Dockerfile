FROM node:boron
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
WORKDIR /usr/src/app/client
RUN npm install
RUN mkdir -p /usr/src/app/client/dist
RUN npm run build
EXPOSE 4000
WORKDIR /usr/src/app
CMD ["npm", "start"]