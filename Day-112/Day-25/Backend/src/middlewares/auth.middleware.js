const userModel = require("../models/user.model")

const jwt = require("jsonwebtoken")

async function authUser(req, res, next) {
  const token = userModel.cookie.token

  if(!token){
    return res.status(401).json({
      message: "Token not provided"
    })
  }

  try {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET-KEY
  )
  req.User = decoded

  next()

  } catch (err){
    return res.status(401).json({
      message: "Invalid token"
    })
  }
}

module.exports = authUser