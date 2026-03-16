const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'User name already exists'],
    required: [true, 'User name is required'],
  },
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is Required'],
  },
  bio: String,
  profile_image: {
    type: String,
    default: "https://ik.imagekit.io/Manu01/cohort-2.O/default_image.png"
  },
});

const userModel = mongoose.model("users", userSchema)

module.exports = userModel