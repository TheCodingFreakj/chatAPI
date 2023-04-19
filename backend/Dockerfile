# FROM node:10 
# COPY backend/package*.json ./backend
# COPY backend ./backend
# RUN cd backend && npm install
# EXPOSE 5000

# CMD ["node", "./backend/index.js"]


# That is why we tell node here to use the current node image as base.
FROM node:18-alpine 
WORKDIR /app/backend

ENV CHATGPT_TOKEN=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
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
EXPOSE 5000
CMD ["npm", "run", "start"]

