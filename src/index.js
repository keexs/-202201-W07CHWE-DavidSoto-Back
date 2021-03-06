require("dotenv").config();
const debug = require("debug")("facebruh: root");
const chalk = require("chalk");
const connectDB = require("./database");
const app = require("./server");
const startServer = require("./server/startServer");

const port = process.env.SERVER_PORT || 3000;
const mongoConnection = process.env.MONGODB_STRING;

(async () => {
  try {
    await connectDB(mongoConnection);
    await startServer(port, app);
  } catch (error) {
    debug(chalk.red(`Error: `, error.message));
  }
})();
