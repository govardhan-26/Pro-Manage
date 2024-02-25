import React, { useState } from "react";
import "./DeleteModal.css";
import { Button } from "../ui/Button/Button";
const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <button onClick={toggleModal}>click</button>
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <button type="button" className="close-button" onClick={closeModal}>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="modal-content">{"hello there"}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
