FROM node:16

COPY . .

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install NodeJS
RUN npm install
#Install ReactUI
RUN npm install --prefix ./ReactUI
RUN npm run build --prefix ./ReactUI

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]