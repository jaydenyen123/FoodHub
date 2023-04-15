const mongoose = require("mongoose");
const RecipeSchema = mongoose.Schema({
  User: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  Name: String,
  Description: String,
  Method: String,
  Ingredient: String,
  Category: String,
  PictureUrl: String,
  CommentList: [{type: mongoose.Schema.Types.ObjectId, ref: 'CommentModel'}]
}, {collection: "Recipes"});

module.exports = RecipeSchema;

