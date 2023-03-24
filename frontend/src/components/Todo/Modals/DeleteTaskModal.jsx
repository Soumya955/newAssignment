import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";

const DeleteTaskModal = ({
  show,
  handleClose,
  deleteTodo,
  title = "Delete To-Do",
  content = (
    <>
      Are you sure you want to <b>Delete</b>?
    </>
  ),
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modalContainer">
        <Modal.Title>{title} </Modal.Title>
        <div className="modalBody">{content}</div>
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
            onClick={deleteTodo}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTaskModal;
