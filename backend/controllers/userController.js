const User = require("../models/User");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generatetoken");

//controller which sends requset to sever and response
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body; //requesting those destructured variables from body of requests
  console.log(req)
  const userExist = await User.findOne({ email }); //finding the incame email in the schema of database
  if (userExist) {
    res.status(403); //403 vaidation error
    throw new Error("User Already Exist");
  }
  //creating a new user if the email doesn't exist in database schema
  const user = await User.create({
    username,
    email,
    password,
  });

  //if user is created setting status as success and sending response as json with following proprties
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error 400");
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken;
    res.status(200).json({
      _id: user.id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
    console.log(`Login Successfull `);
  } else {
    res.status(404).json("Invalid Email Or Password");
    console.log("Invalid Email or Password");
  }
};

exports.apiGetAllUsers = async (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).json({ status: "succes", users });
    })
    .catch((error) => {
      res.status(400).json({ status: "error", message: "Failed to get users" });
    });
};