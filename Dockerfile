FROM node:alpine as builder
WORKDIR /app
ENV PATH /app/node_moduels/.bin:$PATH

COPY . /app/
RUN npm install --legacy-peer-deps
CMD ["npm", "run", "build"]