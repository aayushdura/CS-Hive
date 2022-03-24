const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
//controller which sends requset to sever and response
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body; //requesting those destructured variables from body of requests

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

  //creating instances
  // const _user = new User({
  //   username,
  //   email,
  //   password,
  // });
  // _user.save();

  //if user is created setting status as success and sending response as json with following proprties
  if (user) {
    res.status(201).json(`${user.email},${user.username}`);
  } else {
    res.status(400);
    throw new Error("Error 400");
  }
});
module.exports = { registerUser };
