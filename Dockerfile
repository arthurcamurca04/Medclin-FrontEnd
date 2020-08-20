FROM node:10-alpine
WORKDIR /app/public
COPY  package.json .
RUN node --version && npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]