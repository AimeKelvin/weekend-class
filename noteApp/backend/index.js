const express = require('express');
const db = require("./config/db")
let noteRoutes = require("./routes/note.routes")
let cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/", noteRoutes)
 
app.listen(3000, ()=> {
    console.log('Welcome to the note app')
})

