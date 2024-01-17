const { Router, request, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload.js");

const UsersController = require("../controllers/UsersController.js");
const UserAvatarController = require("../controllers/UserAvatarController.js");
const ensureAutheticated = require("../middleware/ensureAuthenticated.js");

const usersController = new UsersController;
const upload = multer(uploadConfig.MULTER);
const userAvatarController = new UserAvatarController();


const usersRoutes = Router();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAutheticated, usersController.update);
usersRoutes.patch("/avatar", ensureAutheticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;