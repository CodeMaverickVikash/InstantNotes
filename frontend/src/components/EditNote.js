import React, { useEffect, useState } from "react";
import CustomModal from "./common/Custom-modal";

const EditNote = ({ editNote, updateNote }) => {
  const modalOptions = {
    title: "Update a note",
    primaryBtn: "Save changes",
    primaryCallback: update,
  };
  const [showHideModal, setShowHideModal] = useState(false);
  const [note, setNote] = useState(editNote);

  useEffect(() => {
    setShowHideModal(() => {
      return Object.keys(editNote).length === 0 ? false : true;
    });
    setNote(editNote);
  }, [editNote]);

  function update(e) {
    updateNote(e, note);
  }

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <CustomModal
      showHideModal={showHideModal}
      setShowHideModal={setShowHideModal}
      modalOptions={modalOptions}
    >
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
            value={note.title}
            aria-describedby="emailHelp"
            onChange={onchange}
            minLength={5}
            required
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
            name="description"
            value={note.description}
            onChange={onchange}
            rows="7"
            minLength={5}
            required
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
};

export default EditNote;
