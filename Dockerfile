
### Build Step
# pull the Node.js Docker image
FROM node:16.15.1-alpine3.14 AS deploy-node
# change working directory
WORKDIR /app
# copy the package.json files from local machine to the workdir in container
COPY package.json yarn.lock ./
# run npm install in our local machine
RUN rm -rf node_modules/ && yarn install
# copy the generated modules and all other files to the container
COPY . .
# build the application
RUN yarn build
### Serve Step
# pull the Node.js Docker image
ENV PORT 5050
EXPOSE 5050
# the command that starts our app
CMD ["node", "build"]

# FROM node:16.15.1-alpine3.14 AS deploy-node

# WORKDIR /app
# RUN rm -rf ./node_modules
# COPY --from=build /app/package.json .
# COPY --from=build /app .
# RUN yarn build
# CMD ["node", "index.js"]
