FROM resin/rpi-node:0.10.36-slim

RUN apt-get update

# SSH
RUN apt-get install -y dropbear 
ADD start /start
RUN chmod a+x /start
CMD /start

# METEOR
RUN apt-get install -y build-essential debian-keyring autoconf automake libtool flex bison mongodb git-core python
WORKDIR /usr/local/lib
RUN git clone https://github.com/4commerce-technologies-AG/meteor.git
WORKDIR meteor
RUN ./scripts/generate-dev-bundle.sh
RUN ln -s /usr/local/lib/meteor/meteor /usr/local/bin/meteor

# BASIC TOOLING INSTALL
RUN apt-get install -y vim screen

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