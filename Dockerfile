FROM alpine

RUN apk update
RUN apk add nodejs
RUN apk add git
RUN apk add npm
RUN apk add yarn
RUN git clone https://github.com/Cipher0071/SHADOW-MD /root/SHADOW-MD

WORKDIR /root/SHADOW-MD
RUN npm install sharp@0.33.2 --force
RUN yarn install --network-concurrency 1

EXPOSE 8000

CMD ["npm", "start"]
