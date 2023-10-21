const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError.js");
const { hash } = require("bcryptjs");

class UsersController {

  async create (request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(!name){
      throw new AppError("Nome é obrigatório");
    }

    if(checkUserExist) {
      throw new AppError("Este usuário já está em uso.")
    }
    
    const hashedPassword = await hash(password, 8)

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

    response.status(201).json({ name, email, password });
  }

}


module.exports = UsersController;