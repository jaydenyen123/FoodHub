const mongoose = require("mongoose");
const LikesSchema = require('../FoodHubbackendmodel/Likes.schema.server');
const LikesModel = mongoose.model('LikesModel', LikesSchema);

UserLikesARecipe = (user, recipeId) => {
  return LikesModel.create({
    Recipe: recipeId,
    User: user
  })
}

FetchAllLikesInfo = () => {
  return LikesModel.find().populate([{path: 'User'}, {path: 'Recipe'}])
}

DeleteALikeForRecipe = (id) => {
  return LikesModel.findOneAndDelete({_id: id});
}

module.exports = {
  UserLikesARecipe,
  FetchAllLikesInfo,
  DeleteALikeForRecipe
}
