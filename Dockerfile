# FROM node:16.14.0 AS build

# WORKDIR /app
# RUN rm -rf ./*

# COPY --from=build /app .
# COPY package.json .
# COPY yarn.lock .
# COPY . .
# RUN yarn install
# RUN yarn build

# FROM nginx:1.19-alpine AS deploy-static

# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=build /app/build /usr/share/nginx/html
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

### Build Step
# pull the Node.js Docker image
FROM node:16.15.1-alpine3.14
# change working directory
WORKDIR /app
# copy the package.json files from local machine to the workdir in container
COPY package.json yarn.lock ./
# run npm install in our local machine
RUN rm -rf node_modules/ && yarn install
# copy the generated modules and all other files to the container
COPY . .
# build the application
RUN npm run build
### Serve Step
# pull the Node.js Docker image
# FROM node:16.14.0-alpine3.13
# # change working directory
# WORKDIR /app
# # copy files from previous step
# COPY --from=builder /usr/src/app/build .
# COPY --from=builder /usr/src/app/package.json .
# COPY --from=builder /usr/src/app/node_modules ./node_modules
# # our app is running on port 3000 within the container, so need to expose it
ENV PORT 5000
EXPOSE 5000
# the command that starts our app
CMD ["node", "build"]
