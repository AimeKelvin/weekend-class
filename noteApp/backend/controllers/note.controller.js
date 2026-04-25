let db = require("../config/db")

let addNote = (req, res) => {
//request data
let {title, description} = req.body

//create a query
let sql = "INSERT INTO notes (note_title, note_description) VALUES (?,?)"

//send query with the dynamic data
db.query(sql, [title, description], (err)=>{
//program will stop if there is an error
    if(err) res.status(500).json(err)
    res.status(200).json({ message: "Note created successfully" })

})

}

let getNotes = (req,res) => {

    db.query("SELECT * FROM notes", (err, result)=>{
        if(err) res.status(500).json(err)
        res.status(200).json(result)
    })
}

let updateNote = (req,res)=>{

let {title, description} = req.body
let id = req.params.id

let sql = "UPDATE notes SET note_title = ?, note_description = ? WHERE note_id = ?"
db.query(sql, [title, description, id], (err)=>{
//program will stop if there is an error
    if(err) res.status(500).json(err)
    res.status(200).json({ message: "Note updated successfully" })

})

}

module.exports = {addNote, getNotes, updateNote}