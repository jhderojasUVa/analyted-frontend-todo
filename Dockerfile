FROM node:lts-alpine AS BUILD

# Change workdir for the app
# and copy the package*.json
# to install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy the app
COPY . .

# Build the app
RUN npm run build

# We use two steps build in order to minimize the size of the image
FROM node:lts-alpine AS DEPLOY

# Install a simple http server
# On a proper example we will need to use and
# install a proper server like apache or ngix
RUN npm install -g http-server

# Go to a directory where the app will be
WORKDIR /app

# Copy from the previous step into here
COPY --from=BUILD /app/dist /app/dist

# Tag
LABEL org.opencontainers.image.source https://github.com/jhderojasUVa/analyted-frontend-todo

# Expose port
EXPOSE 8090

# Start http server to dist folder
CMD [ "http-server", "--cors", "-p8090", "/app/dist" ]
