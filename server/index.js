const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectToDB = require("./config/db.js");

dotenv.config();
connectToDB();

const app = express();
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
