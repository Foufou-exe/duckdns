// API server with Express.js
import express from "express";
import http from "http";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Create an Express.js server
const app = express();

// Define the folder that will be used for static assets
const port = 3000;
const ip = "0.0.0.0";
const server = http.createServer(app);

// Activate CORS for all routes
app.use(cors());
// Activate the JSON body parser
app.use(express.json());

// Define the static assets folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test fonctionnement
app.get("/api/test", (req, res) => {
  res.send("API fonctionnelle");
});

// Define the API routes
app.post("/api/save-markdown", (req, res) => {
  const { content, viewName } = req.body;
  const filePath = path.join(
    __dirname,
    "../../components/news/list-news",
    `${viewName}.md`
  );

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Erreur lors de l écriture du fichier Markdown", err);
      return res.status(500).send("Erreur lors de l écriture du fichier");
    }
    res.send("Fichier Markdown sauvegardé avec succès");
  });
});

app.post('/api/save-articles', (req, res) => {
  const newArticle = req.body; // Make sure this is a single object, not an array

  const filePath = path.join(__dirname, "../../assets/data/newsData.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier JSON", err);
      return res.status(500).send("Erreur lors de la lecture des articles");
    }

    const existingArticles = JSON.parse(data);
    existingArticles.push(newArticle); // Add the item to the existing table

    fs.writeFile(filePath, JSON.stringify(existingArticles, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error("Erreur lors de l'écriture du fichier JSON", writeErr);
        return res.status(500).send("Erreur lors de la sauvegarde des articles");
      }
      res.send("Articles sauvegardés avec succès");
    });
  });
});


app.get("/api/get-articles", (req, res) => {
  // Définissez le chemin vers votre fichier JSON
  const filePath = path.join(__dirname, "../../assets/data/newsData.json");

  // Lisez les données du fichier JSON
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier JSON", err);
      return res.status(500).send("Erreur lors de la lecture des articles");
    }
    res.send(JSON.parse(data));
  });
});

server.listen(port, ip, () => {
  console.log(`API disponible sur http://localhost:${port}/api/test`);
});
