const { Router, request, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload.js");

const UsersController = require("../controllers/UsersController.js");
const ensureAutheticated = require("../middleware/ensureAuthenticated.js");

const usersController = new UsersController;
const upload = multer(uploadConfig.MULTER);


const usersRoutes = Router();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAutheticated, usersController.update);
usersRoutes.patch("/avatar", ensureAutheticated, upload.single("avatar"), (request, response) => {
  console.log(request.file.filename);
  response.json();
})

module.exports = usersRoutes;