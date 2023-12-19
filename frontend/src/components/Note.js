import React from "react";

export default function Note({
  note,
  handleEditNote,
  handleDeleteNote,
  handleViewNote,
}) {
  return (
    <>
      <div className="col-md-6 my-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <span
                className="card-title ellipsis-container"
                title={note.title}
              >
                {note.title}
              </span>
              <div className="action-icons ms-4">
                <i
                  className="fas fa-trash-alt mx-2"
                  title="Delete Note"
                  onClick={() => handleDeleteNote(note._id)}
                ></i>
                <i
                  className="far fa-edit mx-2"
                  title="Edit Note"
                  onClick={() => handleEditNote(note)}
                ></i>
                <i
                  className="far fa-eye mx-2"
                  title="View Note"
                  onClick={() => handleViewNote(note)}
                ></i>
              </div>
            </div>
            <p
              className="card-text ellipsis-container"
              title={note.description}
            >
              {note.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
