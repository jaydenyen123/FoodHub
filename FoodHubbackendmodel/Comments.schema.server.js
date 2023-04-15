const mongoose = require("mongoose");
const CommentSchema = mongoose.Schema({
  User: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  Recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipeModel'},
  Content: String,
  Rating: String
}, {collection: "Comments"});

module.exports = CommentSchema;
