const express = require("express")
const app = express()

app.use(express.json())

const notes = []

app.post("/notes", (req, res)=>{

  console.log(req.body)

  notes.put(req.body)// to add new note on notes array

  res.send("note created")
})


app.get("/notes", (req, res)=>{
  res.send(notes)
})

app.listen(3000, ()=>{
  console.log("server is running on port 30000");
  
})