# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the TypeScript code
RUN npm run build

#COPY
COPY .env .env
# Expose the port the app runs on
EXPOSE 4000

# Define the environment variable for production
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/index.js"]