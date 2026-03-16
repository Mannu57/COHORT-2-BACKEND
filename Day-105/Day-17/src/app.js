/**
 * -server create krna
 * - server ko config krna
 */

const express = require('express')
const cookieParser = require('cookie-parser')

const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')

const app = express()

app.use(express.json())// to read data in req.body

app.use(cookieParser())

/**
 * - api/auth/register
 */
app.use('/api/auth', authRouter)

/**
 * POST -api/posts
 */
app.use('/api/posts', postRouter)


module.exports = app