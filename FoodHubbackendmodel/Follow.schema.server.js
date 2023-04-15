const mongoose = require("mongoose");
const FollowSchema = mongoose.Schema({
  Follower: {type: mongoose.Types.Schema.ObjectId, ref: 'UserModel'},
  Followee: {type: mongoose.Types.Schema.ObjectId, ref: 'UserModel'}
}, {collection: "Follow"});

module.exports = FollowSchema;
