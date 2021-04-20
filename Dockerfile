FROM node:12.17.0-alpine as build
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install
RUN npm run build

# run with pm2
FROM node:12.17.0-alpine
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
COPY --from=build /usr/build .
RUN npm install pm2 -g
EXPOSE 3000
CMD ["pm2-runtime","index.js"]