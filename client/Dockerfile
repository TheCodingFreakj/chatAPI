# That is why we tell node here to use the current node image as base.
FROM node:18-alpine 
WORKDIR /app/frontend
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "serve"]


