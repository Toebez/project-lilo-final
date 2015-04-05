FROM resin/rpi-node:0.10.36-slim

RUN apt-get update && apt-get install -y \
  dropbear \
  build-essential \
  mongodb \
  git-core \
  python \
  vim \
  screen

RUN npm install --prefix /usr/src/cache serialport@1.3.1
RUN npm install --prefix /usr/src/cache fibers@1.0.5

ADD scripts /usr/src/

COPY web/output/bundle /usr/src/app/

CMD /start

# # INSTALL DEPENDENCIES
#  (cd programs/server && npm install)
