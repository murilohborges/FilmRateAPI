const { Router, request, response } = require("express");

const usersRouter = Router();

usersRouter.post("/", (request, response) => {
  const { name, email, password } = request.body;

  response.json({ name, email, password});
})