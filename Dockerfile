FROM node:10.15.3

RUN mkdir -p src/app

COPY . src/app

WORKDIR src/app

RUN npm install
RUN npm run build

EXPOSE 3002

CMD ["npm", "run", "dock"]
