import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    // useContext hook
    const context = useContext(noteContext);
    const { addNote } = context;

    // useState hook
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    // Function
    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    const submitNote = (e) => {
        e.preventDefault(); // it prevent to reload page
        addNote(note.title, note.description, note.tag);
        
        setNote({ title: "", description: "", tag: "" });
    }

    return (
        <div>
            <div className="container my-4">
                <h2>Add a Note</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea type="textarea" className="form-control" id="description" name="description"  value={note.description} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange} />
                    </div>

                    <button disabled={note.title === "" || note.description === "" || note.tag === ""} type="submit" className="btn btn-primary" onClick={submitNote}>Add Note</button>
                </form>
            </div>
        </div>
    )
}
