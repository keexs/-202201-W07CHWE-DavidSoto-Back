require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");
const loginRouter = require("./routers/loginRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user", loginRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
