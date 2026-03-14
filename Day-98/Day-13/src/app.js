/**
 * - Server create karna
 * - register user ko krna
*/


const express = require('express')
const authRouter = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())// to read data in req.body
app.use(cookieParser())

/**
 * - api/auth/register
 */
app.use('/api/auth', authRouter)

module.exports = app