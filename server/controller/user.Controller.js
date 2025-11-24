const bycrypt = require("bcryptjs");
const UserModel = require("../model/user.model.js");
const jwt = require("jsonwebtoken");

//Create account for new users

const createUser = async () => {
  try {
    const { Fullname, Email, Password } = req.body;
    //check if user already exists
    let existingUser = await UserModel.findone(Email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      //hash passwordate
      let hashedPassword = await bycrypt.hash(Password, 10);
      console.log(hashedPassword);
    }
    const newUser = new UserModel.create({
      Fullname,
      Email,
      Password: hashedPassword,
    });
    res.status(201).json({
      message: "Account created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create account",
      data: error.message,
    });
  }
};
