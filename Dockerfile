FROM node:lts-alpine

# Install a simple http server
# On a proper example we will need to use and
# install a proper server like apache or ngix
RUN npm install -g http-server

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

# Tag
LABEL org.opencontainers.image.source https://github.com/jhderojasUVa/analyted-frontend-todo

# Expose port
EXPOSE 8090
# Start http server to dist folder
CMD [ "http-server", "--cors", "-p8090", "/app/dist" ]
