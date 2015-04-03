FROM resin/rpi-node:0.12.0-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ONBUILD COPY rpi /usr/src/app/
#ONBUILD RUN npm install
#ONBUILD COPY . /usr/src/app
#CMD [ "npm", "start" ]

RUN apt-get update && apt-get install dropbear
ADD start /start
RUN chmod a+x /start
CMD /start

