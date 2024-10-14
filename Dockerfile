# Step 1: Build the React + Vite application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other project files
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application using nginx
FROM nginx:alpine AS production

# Copy built files from the build step
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]