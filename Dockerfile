FROM node:16.14.0 AS build

WORKDIR /.svelte-kit/build

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=build /.svelte-kit/build /usr/share/nginx/html