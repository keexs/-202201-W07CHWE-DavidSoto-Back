require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");
const loginRouter = require("./routers/loginRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());

app.use("/login", loginRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
