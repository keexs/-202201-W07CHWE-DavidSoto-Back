const { Schema, model } = require("mongoose");

const UserModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  name: { type: String, required: true },

  friends: { type: Array },

  enemies: { type: Array },
});

const User = model("User", UserModel, "users");

module.exports = User;
