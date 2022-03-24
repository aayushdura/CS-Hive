// const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const loginUser = async (req, res) => {
  console.log("req", req.body);
  const { email, password } = req.body;
  const userFound = await User.findOne({ email });
  if (userFound) {
    res.status(201);
    console.log(`Login Successfull ${email}+ Welcome`);
  } else {
    res.status(404);
    console.log("User Not Found Please Do Resgister");
  }
};
module.exports = { loginUser };
