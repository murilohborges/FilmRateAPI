const { Router } = require("express");

const UsersController = require("../controllers/UsersController.js");
const ensureAutheticated = require("../middleware/ensureAuthenticated.js");

const usersController = new UsersController;

const usersRoutes = Router();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAutheticated, usersController.update);

module.exports = usersRoutes;