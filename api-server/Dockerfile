# Stage 1: Build Stage
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Remove dev dependencies (optional, but useful for production)
RUN npm prune --production


# Stage 2: Production Stage
FROM node:22-alpine AS runtime

# Set the working directory
WORKDIR /usr/src/app

# Copy only necessary files from the builder stage
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Expose the application port
EXPOSE 3000

# Run the application in production mode
CMD ["node", "dist/main.js"]
