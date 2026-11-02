import mongoose from "mongoose";
import config from "./config.js";
import dns from "dns";

dns.setServers([`0.0.0.0`, `8.8.8.8`]);

export const connectToDB = async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log("Connected to Database successfully!");
  } catch (err) {
    console.log("MongoDB Connection error!", err);
  }
};
