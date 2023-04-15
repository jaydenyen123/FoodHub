const mongoose = require("mongoose");
const CommentSchema = require('../FoodHubbackendmodel/Comments.schema.server');
const CommentModel = mongoose.model('CommentModel', CommentSchema);
const Recipedao = require('../FoodHubbackenddao/Recipe.dao.server');

createComment = (id, comment, userid) => {
  return CommentModel.create({
    User: userid,
    Recipe: id,
    Content: comment.Content,
    Rating: comment.Rating
  });
};
DeleteAllCommentForThePost = (id) => {
  return CommentModel.remove({Recipe: id});
}
DeleteOneCommentForAPost = (id) => {
  return CommentModel.findOneAndDelete({_id: id});
}
UpdateOneCommentForAPost = (id, newComment) => {
  return CommentModel.findOneAndUpdate({_id: id}, {$set:
      {Content: newComment.Content,
        Rating: newComment.Rating}})
};
FetchOneCommentById = (commentId) => {
  return CommentModel.findOne({_id: commentId});
};
module.exports = {
  createComment,
  DeleteAllCommentForThePost,
  DeleteOneCommentForAPost,
  UpdateOneCommentForAPost,
  FetchOneCommentById
}

