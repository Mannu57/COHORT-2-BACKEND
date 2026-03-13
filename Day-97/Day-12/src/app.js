const express = require('express')
const authRouter = require("./routes/auth.routes")

const app = express()

app.use(express.json()) // to read data in req.body


/**
 * - /api/auth/register
 */
app.use("/api/auth", authRouter)

module.exports = app