FROM resin/rpi-node:0.10.36-slim

RUN apt-get update && apt-get install -y \
  dropbear \
  build-essential \
  mongodb \
  git-core \
  python \
  vim \
  screen

RUN apt-get install -y libraspberrypi-bin

COPY scripts /usr/src/

COPY web/output/bundle /usr/src/app/ 

CMD /usr/src/start