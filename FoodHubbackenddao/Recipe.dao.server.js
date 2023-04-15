const mongoose = require("mongoose");
const RecipeSchema = require('../FoodHubbackendmodel/Recipe.schema.server');
const RecipeModel = mongoose.model('RecipeModel', RecipeSchema);
createSingleRecipe = (recipe, id) => {
  return RecipeModel.create({
    User: id,
    Name: recipe.Name,
    Description: recipe.Description,
    Method: recipe.Method,
    Ingredient: recipe.Ingredient,
    Category: recipe.Category,
    PictureUrl: recipe.PictureUrl,
  });
};
fetchAllRecipe = () => {
  return RecipeModel.find().populate([{path: 'User'}, {path: 'CommentList', populate: {path: 'User'}}])
};
fetchOneRecipe = (id) => {
  return RecipeModel.findOne({_id: id}).populate([{path: 'User'},
    {path: 'CommentList', populate: {path: 'User'}}]);
};
fetchOneRecipeAndUpdate = (id, recipe) => {
  return RecipeModel.findOneAndUpdate({_id: id}, {$set:
      {Name: recipe.Name,
        Description: recipe.Description,
        Method: recipe.Method,
        Ingredient: recipe.Ingredient,
        Category: recipe.Category,
        PictureUrl: recipe.PictureUrl
      }
  })
};
fetchOneRecipeAndDelete = (id) => {
  return RecipeModel.findOneAndDelete({_id: id});
}
AddCommentToTheRecipe = (id, comment) => {
  return RecipeModel.findOne({_id: id}).then((recipe) => {
    recipe.CommentList.push(comment._id);
    return recipe.save();
  })
};
DeleteACommentInAPost = (id, commentid) => {
  return RecipeModel.findOne({_id: id}.then((recipe) => {
    for (let i = 0; i < recipe.CommentList.length; i++) {
      if (recipe.CommentList[i] === commentid) {
        recipe.CommentList.splice(i, 1);
      }
    }
    return recipe.save();
  }))
};
fetchOnlyThereFoodType = (selectType) => {
  return RecipeModel.find({Category: selectType});
}

module.exports = {
  createSingleRecipe,
  fetchAllRecipe,
  fetchOneRecipe,
  fetchOneRecipeAndUpdate,
  fetchOneRecipeAndDelete,
  AddCommentToTheRecipe,
  DeleteACommentInAPost,
  fetchOnlyThereFoodType
}
