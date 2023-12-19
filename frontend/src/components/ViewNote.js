import CustomModal from "./common/Custom-modal";
import React, { useState, useEffect } from "react";

const ViewNote = ({ viewNote }) => {
  const [showHideModal, setShowHideModal] = useState(false);
  const [note, setNote] = useState(viewNote);
  const modalOptions = {
    title: "View note",
  };

  useEffect(() => {
    setShowHideModal(() => {
      return Object.keys(viewNote).length === 0 ? false : true;
    });
    setNote(viewNote);
  }, [viewNote]);

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
            readOnly
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
            rows="7"
            readOnly
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
            readOnly
          />
        </div>
      </form>
    </CustomModal>
  );
};

export default ViewNote;
