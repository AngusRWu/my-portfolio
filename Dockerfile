# Use an official Node.js image
FROM node:20-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# 6. Build the app
RUN npm run build

# Start development server
CMD ["npm", "run"]
