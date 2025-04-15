import "dotenv/config";
import { config } from "./config/app.config";


const express = require("express");
const app = express();

app.listen(config.PORT, async () => {
  console.log(`Server is listening on port ${config.NODE_ENV}`);
});
