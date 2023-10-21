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

  async update(request, response) {
    const { name, email } = request.body;
    const { id } = request.params;

    console.log(name);

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if(!user) {
      throw new AppError("Usuário não encontrado");
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.");
    }

    user.name = name;
    user.email = email;

    await database.run(`
    UPDATE users SET
    name = ?,
    email = ?,
    updated_at = ?
    WHERE id = ?`,
    [user.name, user.email, new Date(), id]);

    return response.status(201).json();

  }

}


module.exports = UsersController;