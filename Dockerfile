FROM node:16.15.1-alpine

RUN mkdir src

RUN apk update && \
    apk upgrade && \
    apk add git

ADD ./run.sh /usr/local/bin/run.sh

CMD ["/usr/local/bin/run.sh"]
