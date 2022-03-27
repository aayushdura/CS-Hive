const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log(enteredPassword)
  return await bcrypt.compare(enteredPassword, this.password);
};

//to encrypt the password everytime before it is saved in database
userSchema.pre("save", async function (next) {
  console.log(this.password)
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});


const User = mongoose.model("User", userSchema);

module.exports = User;
