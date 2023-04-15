const mongoose = require("mongoose");
const SavedPostSchema = mongoose.Schema({
  Recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipeModel'},
  User: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: "SavedPost"});

module.exports = SavedPostSchema;
