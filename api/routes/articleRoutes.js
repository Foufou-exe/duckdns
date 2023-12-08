import express from "express";
import { getArticles, saveArticle, editArticleContent, getMarkdown, saveMarkdown, editMarkdown, getArticlesViaId } from "../controllers/articleController.js";

/**
 * Router object for handling article routes.
 * @type {express.Router}
 */

const router = express.Router();

router.get("/get-articles/:id", getArticlesViaId);

router.get("/get-articles", getArticles);

router.get("/markdown/get-markdown/:viewName", getMarkdown);

router.post("/save-articles", saveArticle);

router.post("/edit-article-content/:id", editArticleContent);


router.post("/markdown/save-markdown", saveMarkdown);

router.post("/markdown/edit-markdown/:viewName", editMarkdown);

export default router;
