FROM node:alpine as builder
WORKDIR /app
ENV PATH /app/node_moduels/.bin:$PATH

COPY . /app/
RUN npm install --force
CMD ["npm", "run", "build"]