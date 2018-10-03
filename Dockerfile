# build static files
FROM node:alpine as build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN npm install -g yarn
RUN yarn --silent

# Copy project files and folders
COPY . .
# Build for production
RUN yarn run build

# final image
FROM node:alpine
EXPOSE 8080
# Make current directory the app folder
WORKDIR /usr/src/app
# Install static file server
RUN npm install serve -g
COPY --from=build /usr/src/app/dist ./dist
USER node
CMD ["serve", "--single", "--port", "8080", "dist"]
