/**
 * -server create krna
 * - server ko config krna
 */

const express = require('express')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.routes')

const app = express()

app.use(express.json())// to read data in req.body

app.use(cookieParser())

app.use('/api/auth', authRouter)

module.exports = app