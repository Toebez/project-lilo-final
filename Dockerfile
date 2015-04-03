FROM resin/rpi-node:0.12.0

# Install Dropbear.
RUN apt-get update && apt-get install dropbear

ADD start /start

RUN chmod a+x /start

CMD /start
