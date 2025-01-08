# Step 1: Use an official Node.js image
FROM node:20-alpine AS builder

# Install Nginx
RUN apk add --no-cache nginx

# Set working directory for the React app
WORKDIR /app/web

# Copy package.json and install dependencies for the React app
COPY web/package*.json ./
RUN npm install

# Copy the rest of the files and build the React app
COPY web/ . 
RUN npm run build

# Step 2: Set working directory for the backend
WORKDIR /app/company-portal

# Copy package.json and install dependencies for the backend
COPY company-portal/package*.json ./
RUN npm install

# Copy the rest of the files for the backend
COPY company-portal/ .

# Step 3: Copy Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Step 4: Expose ports for both frontend and backend
EXPOSE 80 8080

# Step 5: Start Nginx and the backend application
CMD ["sh", "-c", "nginx -g 'daemon off;' & node /app/company-portal/server.js"]
