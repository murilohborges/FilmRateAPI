const { Router } = require("express");

const NotesController = require("../controllers/NotesController.js");

const notesController = new NotesController();

const notesRoutes = Router();

const ensureAuthenticated = require("../middleware/ensureAuthenticated.js");

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/", notesController.index);

module.exports = notesRoutes;