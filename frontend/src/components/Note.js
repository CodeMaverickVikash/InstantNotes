import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function Note(props) {
  // props
  const { note, openModal, showAlert } = props;

  // useContext hook
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <>
      {/* Fetching Note */}
      <div className="col-md-6 my-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <span className="card-title">
                {note.title}
              </span>
              <i
                className="fas fa-trash-alt mx-2"
                onClick={() => {
                  // const c = alert("Are you sure to delete this Note");
                  if (window.confirm("Are you sure to delete this Note")) {
                    deleteNote(note._id);
                  }
                }}
              ></i>
              <i
                className="far fa-edit mx-2"
                onClick={() => {
                  openModal(note);
                }}
              ></i>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
