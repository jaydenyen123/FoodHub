const mongoose = require("mongoose");
const bcryptjs = require('bcrypt')

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  profilePicture: String,
  DisplayName: String
}, {collection: "Users"});

UserSchema.pre('save', async function() {
  if(this.isModified('password') || this.isNew) {
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(this.password, salt);
    this.password = hash;
  }
})

module.exports = UserSchema;



