FROM node:alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/
RUN npm install
CMD ["npm", "run", "start"]