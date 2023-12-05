// API server with Express.js
import express from "express";
import http from "http";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import db from "./database.js";
import md5 from "md5";

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

app.get("/api/user/list-users", (req, res) => {
  const requete = "SELECT name FROM user";
  db.all(requete, (err, rows) => {
    if (err) {
      console.error("Erreur lors de la recherche des utilisateurs", err);
      return res
        .status(500)
        .send("Erreur lors de la recherche des utilisateurs");
    }
    res.send(rows);
  });
});

app.get("/api/users/count-users", (req, res) => {
  const requete = "SELECT COUNT(*) AS count FROM user";

  db.get(requete, (err, row) => {
    if (err) {
      console.error("Erreur lors de la recherche des utilisateurs", err);
      return res
        .status(500)
        .send("Erreur lors de la recherche des utilisateurs");
    }
    res.send(row);
  });
});

app.post("/api/user/login", (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = md5(password);
  const requete = "SELECT * FROM user WHERE name = ?";
  const params = [username];

  db.get(requete, params, (err, row) => {
    if (err) {
      console.error("Erreur lors de la recherche de l'utilisateur", err);
      return res
        .status(500)
        .send("Erreur lors de la recherche de l'utilisateur");
    }
    if (row && row.password === hashedPassword) {
      // User found and correct password
      res.send(row);
    } else {
      // User not found or incorrect password
      res.status(401).send("Nom d'utilisateur ou mot de passe incorrect");
    }
  });
});


/*
  TODO: PARTY CALLED UP BY THE FRONT FOR THE MANAGEMENT OF ARTICLES
*/

app.get("/api/article/get-articles", (req, res) => {
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

app.get("/api/markdown/get-markdown/:viewName", (req, res) => {
  const { viewName } = req.params;
  const filePath = path.join(
    __dirname,
    "../../components/news/list-news",
    `${viewName}.md`
  );

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier Markdown", err);
      return res.status(500).send("Erreur lors de la lecture du fichier");
    }
    res.send(data);
  });
});

app.post("/api/article/save-articles", (req, res) => {
  const newArticle = req.body;

  const filePath = path.join(__dirname, "../../assets/data/newsData.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier JSON", err);
      return res.status(500).send("Erreur lors de la lecture des articles");
    }

    const existingArticles = JSON.parse(data);
    existingArticles.push(newArticle);

    fs.writeFile(
      filePath,
      JSON.stringify(existingArticles, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Erreur lors de l'écriture du fichier JSON", writeErr);
          return res
            .status(500)
            .send("Erreur lors de la sauvegarde des articles");
        }
        res.send("Articles sauvegardés avec succès");
      }
    );
  });
});

app.post("/api/article/edit-article-content/:id", (req, res) => {
  const articleId = req.params.id;
  const updatedArticleData = req.body;

  // Assurez-vous que l'ID du corps de la requête correspond à l'ID de l'article à mettre à jour
  if (updatedArticleData.id.toString() !== articleId) {
    return res.status(400).send("Les ID d'article ne correspondent pas.");
  }

  const jsonFilePath = path.join(__dirname, "../../assets/data/newsData.json");

  try {
    const data = fs.readFileSync(jsonFilePath, "utf8");
    let existingArticles = JSON.parse(data);

    const articleIndex = existingArticles.findIndex(
      (article) => article.id.toString() === articleId
    );

    if (articleIndex === -1) {
      return res.status(404).send("Article non trouvé");
    }

    // Mise à jour de l'article
    existingArticles[articleIndex] = updatedArticleData;

    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(existingArticles, null, 2),
      "utf8"
    );

    res.send("Article mis à jour avec succès");
  } catch (error) {
    console.error("Erreur lors de la manipulation des fichiers", error);
    res.status(500).send("Erreur côté serveur");
  }
});

app.post("/api/article/edit-article-content/:id", (req, res) => {
  const articleId = req.params.id;
  const updatedArticleData = req.body;
  const jsonFilePath = path.join(__dirname, "../../assets/data/newsData.json");

  try {
    const data = fs.readFileSync(jsonFilePath, "utf8");
    let existingArticles = JSON.parse(data);

    const articleIndex = existingArticles.findIndex(
      (article) => article.id.toString() === articleId.toString()
    );

    if (articleIndex === -1) {
      return res.status(404).send("Article non trouvé");
    }
    existingArticles[articleIndex] = updatedArticleData;

    existingArticles[articleIndex].id = parseInt(articleId);

    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(existingArticles, null, 2),
      "utf8"
    );

    res.send("Article mis à jour avec succès");
  } catch (error) {
    console.error("Erreur lors de la manipulation des fichiers", error);
    res.status(500).send("Erreur côté serveur");
  }
});

app.post("/api/markdown/save-markdown", (req, res) => {
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

app.post("/api/markdown/edit-markdown/:viewName", (req, res) => {
  const { viewName } = req.params;
  const filePath = path.join(
    __dirname,
    "../../components/news/list-news",
    `${viewName}.md`
  );
  const { content } = req.body;

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Erreur lors de l écriture du fichier Markdown", err);
      return res.status(500).send("Erreur lors de l écriture du fichier");
    }
    res.send("Fichier Markdown sauvegardé avec succès");
  });
});


server.listen(port, ip, () => {
  console.log(`API disponible sur http://localhost:${port}/`);
});
