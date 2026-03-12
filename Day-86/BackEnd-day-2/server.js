const express = require("express")

const app = express()// server instance created

app.get('/', (req, res)=>{
  res.send('Hello from 3000 server')
})

app.get('/about', function(req, res){
  res.send('This is about page')
})

app.get('/home', (req, res)=>{
  res.send("This is Home page of server 3000")
})

app.listen(3000) //server start