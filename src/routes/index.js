const { Router } = require("express");

const usersRouter = require('./user.routes.js');
const notesRouter = require('./noutes.routes.js');

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);

module.exports = routes;