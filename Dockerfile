FROM resin/rpi-node:0.12.0-slim

RUN apt-get update && apt-get install dropbear
ADD start /start
RUN chmod a+x /start
CMD /start

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app
CMD [ "npm", "start" ]
