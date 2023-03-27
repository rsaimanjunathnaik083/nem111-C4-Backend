const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    gender: String,
    password: String,
    age: Number,
    city: String,
    is_married: Boolean,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { 
    UserModel 
};

// "name" :"ManjuSai",
// "email":"manju@gmail.com",
// "gender" :"Male",
// "password" :"manju",
// "age":23,
// "city":"BLR",
// "is_married":"No"
