import React, { useContext, useState } from "react";
import Note from "./Note";
import EditNote from "./EditNote";
import noteContext from "../context/notes/noteContext";
import ViewNote from "./ViewNote";

const Notes = ({ notes, showAlert }) => {
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;
  const [eNote, setNote] = useState({});
  const [viewNote, setViewNote] = useState({});

  const handleEditNote = (note) => {
    setNote((prev) => {
      return { ...prev, ...note };
    });
  };

  const updateNote = (e, note) => {
    e.preventDefault();
    editNote(note._id, note.title, note.description, note.tag);
    showAlert("Note updated successfully", "info");
  };

  const handleViewNote = (note) => {
    setViewNote((prev) => {
      return { ...prev, ...note };
    });
  };

  const handleDeleteNote = (noteId) => {
    if (window.confirm("Are you sure to delete this Note")) {
      deleteNote(noteId);
      showAlert("Note deleted successfully", "danger");
    }
  };

  return (
    <>
      <ViewNote viewNote={viewNote}></ViewNote>
      <EditNote editNote={eNote} updateNote={updateNote}></EditNote>
      <div className="container row my-5">
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length === 0 && "No Notes to Display"}
        </div>

        {notes.map((note) => {
          return (
            <Note
              key={note._id}
              note={note}
              handleEditNote={handleEditNote}
              handleDeleteNote={handleDeleteNote}
              handleViewNote={handleViewNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
