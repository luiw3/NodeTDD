FROM node:12

RUN apt update && apt install -y netcat

WORKDIR /src/

COPY package*.json ./

RUN npm install

COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

COPY . .

RUN npm i -g nodemon --save
EXPOSE 8080