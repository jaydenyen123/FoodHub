const mongoose = require("mongoose");
const UserSchema = require('../FoodHubbackendmodel/Users.schema.server');
const UserModel = mongoose.model('UserModel', UserSchema);


createUser = (userObject) => {
  return UserModel.create({
    DisplayName: userObject.displayName,
    username: userObject.username,
    password: userObject.password,
    profilePicture: userObject.profileUrl
  })
}

findOneUser = (user) => {
  return UserModel.findOne({username: user.email})
}

findOneById = (id, callback) => {
  return UserModel.findOne({_id: id}, callback);
}

module.exports = {
  createUser,
  findOneUser,
  findOneById
}




