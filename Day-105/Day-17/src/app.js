/**
 * -server create krna
 * - server ko config krna
 */

const express = require('express')
const cookieParser = require('cookie-parser')



const app = express()
app.use(express.json())// to read data in req.body
app.use(cookieParser())


/* require routes */
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const userRouter =  require('./routes/user.routes')



/* using routes */
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)




module.exports = app