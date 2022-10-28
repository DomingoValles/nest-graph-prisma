# base image
FROM node:lts

CMD apk add openssl

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

COPY package*.json ./
COPY prisma ./prisma/

# install dependencies
RUN npm install

COPY . .

# start app
EXPOSE 3000
CMD npm run start