# base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]



## Use Node.js v14 as the base image
# FROM node:14

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json files
# COPY . /app

# # Install dependencies
# RUN npm install


# # Expose port 3000 for the backend service
# EXPOSE 3000

# # Start the application
# CMD [ "npm", "start" ]


