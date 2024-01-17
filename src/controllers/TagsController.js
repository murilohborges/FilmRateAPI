const knex = require("../database/knex");
const { response } = require('express');

class TagsController {

  async index(request, response) {
    const user_id = request.user.id;

    const tags = await knex("movie_tags").where({ user_id }).orderBy("name");
    return response.json(tags);

  }

}

module.exports = TagsController
