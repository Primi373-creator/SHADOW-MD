# Use the Node.js 18.x base image
FROM node:18

# Clone the repository
RUN git clone https://github.com/Cipher0071/SHADOW-MD /root/SHADOW-MD

# Set the working directory
WORKDIR /root/SHADOW-MD

# Update npm to the latest version
RUN npm install -g npm@latest

# Install dependencies using yarn
RUN yarn install --network-concurrency 1

# Expose port 8000
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
