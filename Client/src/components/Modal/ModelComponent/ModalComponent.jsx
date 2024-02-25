import "./ModalComponent.css";

import React, { useState } from "react";
import "./ModalComponent.css";
import { Button } from "../../ui/Button/Button";
const ModalComponent = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="outer">
      <div className="modal-container">
        <p>{`Are you sure you want to ${children}?`}</p>
        <div className="button-container">
          <Button
            className="one"
            text={`Yes, ${children}`}
            width="300px"
            bg="#17a2bb"
            border="none"
            color="#ffffff"
          />
          <Button
            text="Cancel"
            width="300px"
            bg={"#ffffff"}
            border={"1px solid #cf3636"}
            color="#cf3636"
          />
        </div>
      </div>
    </div>
  );
};

export { ModalComponent };
