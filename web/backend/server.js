// API server with Express.js
import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

// Create an Express.js server
const app = express();

// Define the folder that will be used for static assets
const port = 3000;
const ip = '0.0.0.0';
const server = http.createServer(app);
  

// Activate CORS for all routes
app.use(cors());
// Activate the JSON body parser
app.use(express.json());

// Define the API routes
app.post('/api/save-markdown', (req, res) => {
  const { content, viewName } = req.body;
  const filePath = path.join(__dirname, 'components/news/list-news', `${viewName}.md`);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Erreur lors de l écriture du fichier Markdown', err);
      return res.status(500).send('Erreur lors de l écriture du fichier');
    }
    res.send('Fichier Markdown sauvegardé avec succès');
  });
});

app.post('/api/save-articles', (req, res) => {
  const articles = req.body;
  
  // Définissez le chemin vers votre fichier JSON
  const filePath = path.join(__dirname, 'assets/data/newsData.json');

  // Écrivez les données dans le fichier JSON
  fs.writeFile(filePath, JSON.stringify(articles, null, 2), (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier JSON', err);
      return res.status(500).send('Erreur lors de la sauvegarde des articles');
    }
    res.send('Articles sauvegardés avec succès');
  });
});


server.listen(port,ip, () => {
  console.log(`API disponible sur https://${ip}:${port}`);
});

