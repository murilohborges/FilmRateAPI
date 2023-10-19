const AppError = require("../utils/AppError.js");

class UsersController {

  async create (request, response) {
    const { name, email, password } = request.body;

    if(!name){
      throw new AppError("Nome é obrigatório");
    }

    response.json({ name, email, password });
  }

}


module.exports = UsersController;