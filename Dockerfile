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

# INIT MONGO
RUN mkdir /data/db/
CMD service mongodb start

#-------------------------------------------------------------------
# Don't touch above
#-------------------------------------------------------------------

WORKDIR /usr/src/app
COPY testapp/test/bundle /usr/src/app/
WORKDIR programs/server
RUN npm install

# BIG INSTALL UPFRONT
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