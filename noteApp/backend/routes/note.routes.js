let {addNote, getNotes, updateNote}  = require("../controllers/note.controller")
let express = require("express")

let router = express.Router()

router.post("/add-note", addNote)
router.get("/notes", getNotes)
router.put("/notes/:id", updateNote)

module.exports =  router
