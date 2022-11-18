import React, { useContext, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Note from "./Note";

export default function Home(props) {
    // props
    const {showAlert} = props;

    // useContext hook
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;

    // useState hook
    const [enote, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    // useRef hook
    const ref = useRef(null);
    const refClose = useRef(null);

    // useHistory hook
    let history = useHistory();

    // useEffect hook
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [])

    // Function
    const openModal = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag }); // Going for editing
    }

    const onchange = (e) => {
        setNote({ ...enote, [e.target.name]: e.target.value });
    }

    const updateNote = (e) => {
        e.preventDefault();
        editNote(enote.id, enote.etitle, enote.edescription, enote.etag);
        refClose.current.click();
    }


    return (
        <>
            {/* Adding Note */}
            <AddNote />

            {/* Editing Note */}
            {/* Button trigger modal */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={enote.etitle} aria-describedby="emailHelp" onChange={onchange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea type="textarea" className="form-control" id="edescription" name="edescription" value={enote.edescription} onChange={onchange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={enote.etag} onChange={onchange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={updateNote}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fetching Notes */}
            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container mx-2">
                    {notes.length === 0 && "No Notes to Display"}
                </div>

                {
                    notes.map((note) => {
                        return <Note key={note._id} note={note} openModal={openModal} showAlert={showAlert} />;
                    })
                }
            </div>

        </>
    )
}



// react app = state + component