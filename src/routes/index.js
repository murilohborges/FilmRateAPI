const { Router } = require("express");

const usersRouter = require('./user.routes.js');
const notesRouter = require('./noutes.routes.js');
const tagsRouter = require('./tags.routes.js');

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;