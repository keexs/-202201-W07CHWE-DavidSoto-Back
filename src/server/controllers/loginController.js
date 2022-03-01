const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../database/models/User");

const signIn = async (req, res, next) => {
  try {
    const { username } = req.body;
    const alreadyUsername = await User.findOne({ username });

    if (!alreadyUsername) {
      const createdUser = await User.create(req.body);
      res.status(200).json(createdUser);
    } else {
      const error = new Error(`The username: ${username}, is already taken`);
      error.code = 400;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    error.message = "Invalid User format";
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const alreadyUser = await User.findOne({ username });
    if (!alreadyUser) {
      const error = new Error(`User: ${username}, not found`);
      error.code = 404;
      next(error);
    } else {
      const correctPassword = await bcrypt.compare(
        password,
        alreadyUser.password
      );
      if (!correctPassword) {
        const error = new Error("Password is not correct");
        error.code = 401;
        next(error);
      } else {
        const userData = {
          username,
          id: alreadyUser.id,
        };
        const token = jwt.sign(userData, process.env.JWT_SECRET);
        res.json({ token });
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { signIn, loginUser };
