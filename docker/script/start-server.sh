#!/usr/bin/env bash

# Author: Foufou-exe
# Date: 08/12/2023
# Description: Start services for the application VueJS + Vite + Nginx + NodeJS + ExpressJS

nginx
nginx -g "daemon off;" 
node ./index.js
