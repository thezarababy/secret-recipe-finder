import mongoose from "mongoose";
const connectToDB = async () => {
  try {
    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fxqmzeh.mongodb.net/${process.env.DB_NAME}
`;
    await mongoose.connect(URL);
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};
module.exports = connectToDB;
