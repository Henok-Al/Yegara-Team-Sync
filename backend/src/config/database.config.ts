const mongoose = require("mongoose");
import { config } from "./app.config";

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("error connecting to the mongoDB");
    process.exit(1);
  }
};

export default connectDatabase;
