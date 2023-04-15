const mongoose = require("mongoose");
const SavedRecipeSchema = require('../FoodHubbackendmodel/SavedRecipes.schema.server');
const SavedRecipeModel = mongoose.model('SavedRecipeModel', SavedRecipeSchema);

onSaveRecipe = (UserId, RecipeId) => {
  SavedRecipeModel.create({
    Recipe: RecipeId,
    User: UserId
  })
}

FetchAllSavedRecipe = () => {
  return SavedRecipeModel.find().populate([{path: 'User'}, {path: 'Recipe'}])
}

FetchAllSavedRecipeBySingleUser = (id) => {
  return SavedRecipeModel.findOne({_id: id}).populate([{path: 'User'}, {path: 'Recipe'}])
}

module.exports = {
  onSaveRecipe,
  FetchAllSavedRecipe,
  FetchAllSavedRecipeBySingleUser
}
