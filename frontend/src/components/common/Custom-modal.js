import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomModal({
  modalOptions,
  children,
  showHideModal,
  setShowHideModal,
}) {
  const defaultOptions = {
    title: "title",
    primaryBtn: "Ok",
  };
  modalOptions = { ...defaultOptions, ...modalOptions };

  const [show, setShow] = useState(false);

  useEffect(() => {
    showHideModal && setShow(showHideModal);
  });

  const handleClose = () => {
    setShow(false);
    setShowHideModal && setShowHideModal(false);
  };
  const handleShow = () => {
    setShow(true);
    setShowHideModal && setShowHideModal(true);
  };

  const callback = (e) => {
    modalOptions.primaryCallback && modalOptions.primaryCallback(e);
    handleClose();
  };

  return (
    <>
      {modalOptions.launchBtnText && (
        <Button variant="primary mx-3 mt-4" onClick={handleShow}>
          {modalOptions.launchBtnText}
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalOptions.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalOptions.body || children}</Modal.Body>
        <Modal.Footer>
          {modalOptions.secondaryBtn && (
            <Button variant="secondary" onClick={handleClose}>
              {modalOptions.secondaryBtn}
            </Button>
          )}
          {modalOptions.primaryBtn && (
            <Button
              variant="primary"
              disabled={modalOptions.primaryBtnDisabled}
              onClick={callback}
            >
              {modalOptions.primaryBtn}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
