import React from "react";
import "./EditModal.css";

const EditModal = () => {
  return (
    <div className="editmodal-container">
      <div className="editmodal-content">
        <div>Edit</div>
        <div>Share</div>
        <div style={{ color: "#CF3636" }}>Delete</div>
      </div>
    </div>
  );
};

export { EditModal };
