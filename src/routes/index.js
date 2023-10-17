const { Router } = require("express");

const usersRouter = require('./user.routes.js');

const routes = Router();

routes.use("/users", usersRoutes);

module.exports = routes;