# DuckDNS - Modernisation of the site

![Markdown](https://img.shields.io/badge/Language-Markdown-blue)
![HTML](https://img.shields.io/badge/Language-HTML-blue)
![CSS](https://img.shields.io/badge/Language-CSS-blue)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-blue)
![Node.js](https://img.shields.io/badge/Language-Node.js-blue)
![Express](https://img.shields.io/badge/Language-Vue3-green)



This project aims to modernise the DuckDNS site.

## Description

The DuckDNS site is a platform for managing dynamic domain names. The aim of this project is to modernise the site's user interface using the latest web technologies.

## Features

- Modern, user-friendly interface
- Simplified management of dynamic domain names
- Integration with other services and tools
- Responsive design
- API for developers based on REST
- Panel for administrators and moderators

## Installation

Clone this repository on your local machine.

#### Frontend

1. Go to `web` folder.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to launch the site.

#### Backend

1. Go to `api` folder.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to launch the API.


__IMPORTANT: The backend must be launched before the frontend.__

#### Docker

1. Go to the root folder.
2. Run `docker build -t duckdns:latest .` to build image docker.
3. Run `docker run --name web-site-duckdns -d -p 8080:80 duckdns:latest` to launch the site.

Example: `http://localhost:8080/`


## Contribution

@Foufou-exe | @IzumiTV

## License

This project is licensed under the MIT license. Please see the `LICENSE` file for more information.
