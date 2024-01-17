const { Router } = require("express");

const TagsController = require("../controllers/TagsController.js");

const ensureAutheticated = require("../middleware/ensureAuthenticated.js");

const tagsController = new TagsController();

const tagsRoutes = Router();

tagsRoutes.get("/", ensureAutheticated, tagsController.index);

module.exports = tagsRoutes;