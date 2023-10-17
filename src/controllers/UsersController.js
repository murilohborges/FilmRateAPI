const AppError = require("../utils/AppError");

class UsersController {

  async create (request, response) {
    const { name, email, password } = request.body;

    response.json({ name, email, password });
  }

}


module.exports = UsersController;