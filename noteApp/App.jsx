import React, { useEffect, useState } from 'react'

export default function App() {
  const [notes, setNotes] = useState([])

  // form state for both add and edit
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editingId, setEditingId] = useState(null)

  // fetch notes
  const fetchNotes = async () => {
    try {
      const res = await fetch('http://localhost:3000/notes')
      const data = await res.json()
      setNotes(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  //  ADD NOTE
  const addNote = async () => {
    await fetch('http://localhost:3000/add-note', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description
      })
    })

    setTitle('')
    setDescription('')
    fetchNotes()
  }

  // ✏️ UPDATE NOTE
  const updateNote = async () => {
    await fetch(`http://localhost:3000/update-note/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description
      })
    })

    setEditingId(null)
    setTitle('')
    setDescription('')
    fetchNotes()
  }

  // fill form when editing
  const startEdit = (note) => {
    setEditingId(note.note_id)
    setTitle(note.note_title)
    setDescription(note.note_description)
  }

  return (
    <div>
      <h1>Notes</h1>

      {/* FORM */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {editingId ? (
        <button onClick={updateNote}>Update</button>
      ) : (
        <button onClick={addNote}>Add</button>
      )}

      <hr />

      {/* LIST */}
      {notes.map(note => (
        <div key={note.note_id}>
          <h2>{note.note_title}</h2>
          <p>{note.note_description}</p>

          <button onClick={() => startEdit(note)}>Edit</button>
        </div>
      ))}
    </div>
  )
}