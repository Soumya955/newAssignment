import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { v4 as uuid } from "uuid";

const CreateTaskModal = ({ show, handleClose, handleSave, categoryList }) => {
  const [todoData, setTodoData] = useState({
    todo: "",
    category: "Todo",
    subCategory: "Home",
    id: uuid(),
    completed: false,
  });

  const handleTodo = (e) => {
    const { name, value } = e.target;
    setTodoData((todoData) => ({ ...todoData, [name]: value }));
    console.log(todoData);
  };

  const resetData = () => {
    setTodoData({
      todo: "",
      category: "Todo",
      subCategory: "Home",
      id: uuid(),
      completed: false,
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modalContainer">
        <Modal.Title>Add New To-Do</Modal.Title>
        <div className="modalBody">
          <TextField
            fullWidth
            value={todoData.todo}
            onChange={handleTodo}
            id="standard-basic"
            label="To-do"
            variant="standard"
            name="todo"
          />
          <FormControl fullWidth sx={{ marginTop: "1em" }}>
            <InputLabel
              sx={{ marginLeft: "-1em" }}
              id="demo-simple-select-label"
            >
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={todoData.category}
              label="Age"
              name="category"
              onChange={handleTodo}
              variant="standard"
            >
              {categoryList
                .filter(
                  ({ name, type }) => name !== "All" && type !== "subCategory"
                )
                .map(({ name }) => (
                  <MenuItem value={name}>{name}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: "1em" }}>
            <InputLabel
              sx={{ marginLeft: "-1em" }}
              id="demo-simple-select-label"
            >
              Sub category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={todoData.subCategory}
              label="Age"
              name="subCategory"
              onChange={handleTodo}
              variant="standard"
            >
              {categoryList
                .filter(
                  ({ name, type }) => name !== "All" && type !== "category"
                )
                .map(({ name }) => (
                  <MenuItem value={name}>{name}</MenuItem>
                ))}
            </Select>
          </FormControl>
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
              handleSave(todoData);
              resetData();
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTaskModal;
