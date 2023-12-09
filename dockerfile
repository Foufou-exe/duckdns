# Initialisation de l'image de base
FROM node:20 as base-stage-0

# Création du repertoire de travail
WORKDIR /app

# Installation des dépendances
RUN  apt update && apt upgrade -y
RUN  apt-get install -y \
    curl \
    gnupg \
    git \
    ca-certificates \
    build-essential \
    libssl-dev \
    libffi-dev \
    python3-dev \
    python3-pip \
    python3-setuptools \
    python3-venv \
    nginx

EXPOSE 80

# Partie Frontend web site: Construction de l'application Vue.js
FROM base-stage-0 as app-build-stage-1
# Create app directory
WORKDIR /app

# Copie des sources
COPY ./web .

# Installation library
RUN npm install

# Build app
RUN npm run build

# Partie Web server: Construction du serveur Nginx
FROM app-build-stage-1 as nginx-server-stage-2

# Copie des sources
COPY  --from=app-build-stage-1 /app/dist /usr/share/nginx/html

COPY ./docker/config-nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Partie Backend API: Construction de l'API Node.js
FROM nginx-server-stage-2 as app-api-stage-final

# Create app directory
WORKDIR /app/api

# Install app dependencies
COPY ./api/package*.json ./

RUN npm install

# Bundle app source
COPY ./api .

# Copy start-server.sh
COPY ./docker/script/start-server.sh /app/api/start-server.sh

# Make start-server.sh executable
RUN chmod +x /app/api/start-server.sh

# Expose the API port
EXPOSE 3000

# Run the API server
ENTRYPOINT [ "./start-server.sh" ]








