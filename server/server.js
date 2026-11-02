import app from "./src/app.js";
import config from "./config/config.js";
import { connectToDB } from "./config/database.js";


connectToDB()

const startServer = () => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
};

startServer();
