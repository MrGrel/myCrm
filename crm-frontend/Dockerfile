FROM node:20-alpine

WORKDIR /frontend

COPY . .

RUN npm config set fetch-retry-maxtimeout 6000000
RUN npm config set fetch-retry-mintimeout 1000000
RUN npm install
RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build"]
