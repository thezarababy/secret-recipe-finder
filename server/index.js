const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectToDB = require("./config/db.js");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route.js");
app.use(express.json());
app.use(cors());

dotenv.config();
connectToDB();

app.use("/api/users", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Server up and running ",
  });
});

const app = express();
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
