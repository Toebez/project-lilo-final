FROM resin/rpi-node:0.12.0-slim

RUN apt-get update

# BIG INSTALL UPFRONT
RUN apt-get install -y build-essential python
RUN mkdir -p /usr/src/app/node_modules
RUN npm install --prefix /usr/src/app serialport

# SSH
RUN apt-get install -y dropbear 
ADD start /start
RUN chmod a+x /start
CMD /start

# BASIC INSTALL
RUN apt-get install -y vim screen

# APP
WORKDIR /usr/src/app
#COPY rpi /usr/src/app/
#RUN npm install
#CMD [ "npm", "start" ]

COPY web/test /usr/src/app/
RUN npm install

