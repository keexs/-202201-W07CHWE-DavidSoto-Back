const debug = require("debug")("facebruh: server: middlewares: errors");
const chalk = require("chalk");

const notFoundError = (req, res) => {
  res.status(404).json({ error: true, message: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug(chalk.red(`Error: ${err.message}`));
  const errorCode = err.code ?? 500;
  const errorMessage = err.code ? err.message : "General Error";
  res.status(errorCode).json({ error: true, message: errorMessage });
};

module.exports = { generalError, notFoundError };
