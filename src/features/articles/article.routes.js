import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated.js";
import { articleControllers } from "./article.controllers.js";

const articleRouter = Router();

articleRouter.get("/search", articleControllers.searchArticles);
articleRouter.get("/search/tags", articleControllers.searchTags);
articleRouter.get("/published", articleControllers.getPublishedArticles);

articleRouter.use(isAuthenticated);
articleRouter.get(
    "/published/me",
    articleControllers.getPublishedArticlesOfUser,
);
articleRouter.get("/:category", articleControllers.getArticlesByCategory);
articleRouter.get("/:slug", articleControllers.getOneArticleBySlug);
articleRouter.post("/", articleControllers.createArticle);
articleRouter.patch("/:articleId", articleControllers.updateArticle);
articleRouter.delete("/:articleId", articleControllers.deleteArticle);

// LIKE & UN-LIKE
articleRouter.patch("/:articleId", articleControllers.likeArticle);
articleRouter.patch("/:articleId", articleControllers.unlikeArticle);

// PUBLISH & UN-PUBLISH
articleRouter.patch("/:articleId", articleControllers.publishArticle);
articleRouter.patch("/:articleId", articleControllers.unpublishArticle);

export { articleRouter };
