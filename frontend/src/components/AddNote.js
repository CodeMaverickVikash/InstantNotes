import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddNote(props) {
  const { openModal } = props;
  // useContext hook
  const context = useContext(noteContext);
  const { addNote } = context;

  // useState hook
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  // Function
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const submitNote = (e) => {
    e.preventDefault(); // it prevent to reload page
    addNote(note.title, note.description, note.tag);

    setNote({ title: "", description: "", tag: "" });
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal2"
        onClick={openModal}
      >
        Add note
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add a Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    value={note.title}
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="textarea"
                    className="form-control"
                    id="description"
                    rows="7"
                    name="description"
                    value={note.description}
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={note.tag}
                    onChange={onchange}
                  />
                </div>

                <button
                  disabled={
                    note.title === "" ||
                    note.description === "" ||
                    note.tag === ""
                  }
                  type="submit"
                  className="btn btn-primary"
                  onClick={submitNote}
                >
                  Add Note
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
