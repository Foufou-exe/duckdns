import http from "http";
import app from "./app.js";

// Configuration du port et de l'IP
const port = 3000;
const ip = "0.0.0.0";

// Démarrage du serveur
const server = http.createServer(app);

// Ecoute du serveur sur le port défini
server.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
