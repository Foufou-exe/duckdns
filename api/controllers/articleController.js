import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Modifies the content of an article.
 * @param {Object} req - The request object containing the HTTP request information.
 * @param {Object} res - The response object used to return the HTTP response.
 * @returns {void}
 */

const getArticles = (req, res) => {
  // Define the path to your JSON file
  const filePath = path.join(__dirname, "../data/json/cardArticles.json");
  // Read the data from the JSON file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier JSON", err);
      return res.status(500).send("Erreur lors de la lecture des articles");
    }
    res.send(JSON.parse(data));
  });
};

const getArticlesViaId = (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  const filePath = path.join(__dirname, "../data/json/cardArticles.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier JSON", err);
      return res.status(500).send("Erreur lors de la lecture des articles");
    }

    const existingArticles = JSON.parse(data);
    const article = existingArticles.find(article => article.id === articleId);

    if (!article) {
      return res.status(404).send("Article non trouvé");
    }

    res.send(article);
  });
};

const saveArticle = (req, res) => {
  const newArticle = req.body;

  const filePath = path.join(__dirname, "../data/json/cardArticles.json");

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
};

const editArticleContent = (req, res) => {
  const articleId = req.params.id;
  const updatedArticleData = req.body;

  // Assurez-vous que l'ID du corps de la requête correspond à l'ID de l'article à mettre à jour
  if (updatedArticleData.id.toString() !== articleId) {
    return res.status(400).send("Les ID d'article ne correspondent pas.");
  }

  const jsonFilePath = path.join(__dirname, "../data/json/cardArticles.json");

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
};

const getMarkdown = (req, res) => {
  const { viewName } = req.params;
  const filePath = path.join(__dirname, "../data/md", `${viewName}.md`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Fichier Markdown non trouvé");
  }
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier Markdown", err);
      return res.status(500).send("Erreur lors de la lecture du fichier");
    }
    res.send(data);
  });
};

const saveMarkdown = (req, res) => {
  const { content, viewName } = req.body;
  /**
   * The file path of the news list view.
   * @type {string}
   */
  const filePath = path.join(__dirname, "../data/md", `${viewName}.md`);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Erreur lors de l écriture du fichier Markdown", err);
      return res.status(500).send("Erreur lors de l écriture du fichier");
    }
    res.send("Fichier Markdown sauvegardé avec succès");
  });
};

const editMarkdown = (req, res) => {
  const { viewName } = req.params;
  /**
   * The file path of the news list view.
   * @type {string}
   */
  const filePath = path.join(__dirname, "../data/md", `${viewName}.md`);
  const { content } = req.body;

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Erreur lors de l écriture du fichier Markdown", err);
      return res.status(500).send("Erreur lors de l écriture du fichier");
    }
    res.send("Fichier Markdown sauvegardé avec succès");
  });
};

export {
  getArticles,
  getArticlesViaId,
  saveArticle,
  editArticleContent,
  getMarkdown,
  saveMarkdown,
  editMarkdown,
};
