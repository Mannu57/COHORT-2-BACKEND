const express = require("express")

const app = express()

app.use(express.json())

const notes = []


/* POST/notes */
app.post("/notes", (req, res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(req.body)    

    res.send("notes created")
})

/* GET /notes */
app.get("/notes", (req, res)=>{
  res.send(notes)
})



/*DELETE /notes */ 
/*params */

/* delete/notes/0  */
app.delete("/notes/:index", (req, res)=>{
  delete notes[req.params.index]

  res.send("note deleted successfully")
})


/* PATCH /notes/:index */
/* req.body = {description :- "sample modified description."} */

app.patch("/notes/:index", (req, res)=>{
  notes[ req.params.index ].description = req.body.description
  
  res.send("note updated successfully")
})


module.exports = app