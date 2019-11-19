const userService = require('../services/User');

class UserController {
  static async index(req, res){
    const users = await userService.fetch();
    res.json(users);
  }
}


module.exports = UserController;