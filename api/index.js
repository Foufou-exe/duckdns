import http from "http";
import app from "./app.js";
import dotenv from "dotenv";

// .env file configuration
dotenv.config({ path: '../.env' });

// Port and IP configuration
const PORT = process.env.VITE_API_SOURCE_PORT
const IP = process.env.VITE_API_SOURCE_HOST

// Démarrage du serveur
const server = http.createServer(app);

// Listen to the server on the defined port
server.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}/`);
});
