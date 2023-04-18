
# Use Node.js v14 as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY . /app

# Install dependencies
RUN npm install

# Build the frontend application
RUN npm run build

# Expose port 8080 for the frontend service
EXPOSE 8080

# Start the application
CMD [ "npm", "start" ]


# FROM node:alpine

# WORKDIR /app

# COPY . /app

# EXPOSE 8081

# # RUN apk update && apk add bash

# RUN npm install --force --legacy-peer-deps

# CMD ["npm", "start", "migrate", "seed"]
