import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import CustomModal from "./common/Custom-modal";

export default function AddNote({ showAlert }) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const modalOptions = {
    launchBtnText: "Add note",
    title: "Add a note",
    primaryBtn: "Add note",
    primaryBtnDisabled:
      note.title === "" || note.description === "" || note.tag === "",
    primaryCallback: submitNote,
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  function submitNote(e) {
    e.preventDefault(); // it prevent to reload page
    addNote(note.title, note.description, note.tag);
    showAlert("Note added successfully", "success");
    setNote({ title: "", description: "", tag: "" });
  }

  return (
    <CustomModal modalOptions={modalOptions}>
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
      </form>
    </CustomModal>
  );
}
