import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../../styles/modal.css";

const CreateCategoryModal = ({ show, handleClose, addCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modalContainer">
        <Modal.Title>Add New To-Do Category</Modal.Title>
        <div className="modalBody">
          <TextField
            sx={{ width: "95%" }}
            value={categoryName}
            onChange={handleCategoryName}
            id="standard-basic"
            label="Category"
            variant="standard"
          />
        </div>
        <div className="modalFooter">
          <Button
            sx={{
              ":hover": {
                backgroundColor: "lightgray",
              },
              color: "red",
            }}
            variant="text"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              ":hover": {
                backgroundColor: "lightgray",
              },
              color: "#42a5f5",
            }}
            variant="text"
            onClick={() => {
              addCategory(categoryName);
              setCategoryName("");
              handleClose();
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCategoryModal;
