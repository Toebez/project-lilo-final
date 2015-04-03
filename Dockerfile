FROM resin/rpi-node:0.12.0-slim

RUN apt-get update && apt-get install -y dropbear vim screen

ADD start /start
RUN chmod a+x /start
CMD /start

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY rpi /usr/src/app/
RUN npm install


#CMD [ "npm", "start" ]


