FROM resin/rpi-node:0.10.36-slim

RUN apt-get update

# SSH
RUN apt-get install -y dropbear 
ADD start /start
RUN chmod a+x /start
CMD /start

# METEOR
RUN apt-get install -y build-essential mongodb git-core python

# BASIC TOOLING INSTALL
RUN apt-get install -y vim screen

# CACHE NPM
WORKDIR /usr/src/app
RUN npm install --prefix /usr/src/app serialport@1.3.1
RUN npm install --prefix /usr/src/app fibers@1.0.5

# SETUP METEOR APP
ADD web/output/web.tar.gz /usr/src/app/
WORKDIR /usr/src/app/bundle

# SET CACHE
RUN mkdir -p programs/server/node_modules/fibers
RUN mv ../node_modules/fibers programs/server/node_modules/
RUN rm -rf programs/server/npm/npm-container/node_modules/serialport
RUN mkdir -p programs/server/npm/npm-container/node_modules/serialport
RUN mv ../node_modules/serialport programs/server/npm/npm-container/node_modules/

RUN (cd programs/server && npm install)

# BIG INSTALL UPFRONT
#RUN export PORT=80
#RUN export ROOT_URL=http://example.com

#RUN mkdir -p /usr/src/app/node_modules
#RUN npm install --prefix /usr/src/app serialport@1.6.3

#APP
#WORKDIR /usr/src/app
#COPY rpi /usr/src/app/
#RUN npm install

#COPY web /usr/src/app/
#RUN npm install --production
#CMD [ "node", "server.js" ]
#apt-get autoremove --purge
#apt-get clean