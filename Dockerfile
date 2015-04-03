FROM resin/rpi-node:0.12.0-slim

RUN apt-get update && apt-get install -y dropbear vim screen

ADD start /start
RUN chmod a+x /start
CMD /start

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD COPY rpi/package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY rpi /usr/src/app/

#CMD [ "npm", "start" ]


