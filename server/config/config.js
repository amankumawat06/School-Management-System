import dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT) {
  throw Error("PORT is not defined in environment variables");
}

if (!process.env.MONGO_URL) {
  throw Error("MONGO_URL is not defined in environment variables");
}

const config = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
};

export default config;
