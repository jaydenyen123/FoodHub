const mongoose = require("mongoose");
const LikesSchema = mongoose.Schema({
  Recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipeModel'},
  User: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: "Likes"});

module.exports = LikesSchema;
