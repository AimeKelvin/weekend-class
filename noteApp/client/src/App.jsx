import {useState, useEffect} from 'react'

export default function App() {

let [notes, setNotes ] = useState([])

let fetchNotes =  async () => {
try{
  let response =  await fetch("http://localhost:3000/notes")
let data = await response.json()
setNotes(data)
}catch(err){
  console.log(err)
}
} 

useEffect(()=>{
  fetchNotes()
}, [])


  console.log(notes)
  return (
    <>
      <h1>Notes</h1>


      { notes.map(note => (
       <div key = {note.note_id}>
        <h2>{note.note_title}</h2>
        <p>{note.note_description}</p>
       </div>
      ))}


    </>
  )
}
