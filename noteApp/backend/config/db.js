const mysql = require("mysql2")

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "note_app",
    password: ""
})


db.connect((err)=>{
    if(err){
        console.log(err)
    }

    console.log("Connection successfully")
})

module.exports = db