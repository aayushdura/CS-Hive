const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email: email });
    if (oldUser) throw "User Already Exists";

    const newUser = await new User({
      fullName: fullName,
      email: email,
      password: password,
    });

    const result = await newUser.save();
    res.status(201).json({
      isSuccess: true,
      user: result,
      msg: "User Created !",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      msg: err,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const hasUser = await User.findOne({
      email: email,
    });
    if (!hasUser) throw "Invalid Credentials";

    //checking the user password
    if (hasUser.password != password) {
      throw "Invalid Credentials";
    }

    //generating the token using jwt
    const payload = {
      id: hasUser._id,
      email: hasUser.email,
    };

    const token = jwt.sign(payload, "akgakg123", {
      expiresIn: "24h",
    });

    return res.status(200).json({
      isSuccess: true,
      token: token,
      msg: "User Logged In",
    });
  } catch (err) {
    console.log(err);
    res.json({
      isSuccess: false,
      msg: err,
    });
  }
};
