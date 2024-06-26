import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated.js";
import { articleControllers } from "./article.controllers.js";

const articleRouter = Router();

articleRouter.get("/search", articleControllers.searchArticles);
articleRouter.get("/search/tags", articleControllers.searchTags);
articleRouter.get("/published", articleControllers.getPublishedArticles);
articleRouter.get(
    "/published/:userID",
    articleControllers.getPublishedArticlesOfUser
);
articleRouter.get("/:slug", articleControllers.getOneArticleBySlug);
articleRouter.get("/:tag", articleControllers.getArticlesByTag);

// Auth middleware
articleRouter.use(isAuthenticated);

articleRouter.post("/", articleControllers.createArticle);
articleRouter.patch("/:articleId", articleControllers.updateArticle);
articleRouter.delete("/:articleId", articleControllers.deleteArticle);

// LIKE & UN-LIKE
articleRouter.patch("/like/:articleId", articleControllers.likeArticle);
articleRouter.patch("/un-like/:articleId", articleControllers.unlikeArticle);

// PUBLISH & UN-PUBLISH
articleRouter.patch("/:articleId", articleControllers.publishArticle);
articleRouter.patch("/:articleId", articleControllers.unpublishArticle);

export { articleRouter };
