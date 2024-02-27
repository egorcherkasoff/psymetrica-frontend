FROM node:20.11.1-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 4173

CMD [ "node", "build" ]