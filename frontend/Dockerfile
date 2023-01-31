FROM node:18.13.0

WORKDIR /app/site
COPY . /app/site

RUN yarn

CMD ["build"]
ENTRYPOINT ["yarn"]
