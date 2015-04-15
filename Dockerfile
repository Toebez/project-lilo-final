FROM resin/rpi-node:0.10.36-slim

RUN apt-get update && apt-get install -y \
  dropbear \
  build-essential \
  mongodb \
  git-core \
  python \
  vim \
  screen \
  libraspberrypi-bin \
  python-pip

RUN apt-get install netcat

COPY scripts /usr/src/
COPY web/output/bundle /usr/src/app/ 

CMD /usr/src/setvars
