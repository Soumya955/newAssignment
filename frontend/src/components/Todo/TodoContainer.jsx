import { Button } from "@mui/material";
import React, { useState } from "react";
import "../../styles/TodoContainer.css";
import TodoNavbar from "./TodoNavbar";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import CreateTaskModal from "./Modals/CreateTaskModal";
import TaskCard from "./TaskCard";

const TodoContainer = ({
  categoryList,
  addTodo,
  todoList,
  updateTodoItem,
  deleteTodoItem,
  selectedItem,
}) => {
  const [openCreateTodoModal, setOpenCreateTodoModal] = useState(false);

  const closeCreateTodo = () => {
    setOpenCreateTodoModal(false);
  };

  const openCreateTodo = () => {
    setOpenCreateTodoModal(true);
  };

  const handleSave = (newTodo) => {
    addTodo(newTodo);
    setOpenCreateTodoModal(false);
  };

  return (
    <div className="todoContainer">
      <TodoNavbar selectedItem={selectedItem} />
      <div className="todoList">
        {todoList.map((taskData) => (
          <TaskCard
            taskData={taskData}
            categoryList={categoryList}
            updateTodoItem={updateTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))}

        <Button
          onClick={openCreateTodo}
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            width: "100%",
            border: "none",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "flex-start",
            fontWeight: "500",
            letterSpacing: "0.25px",
            fontSize: "16px",
            color: "#42a5f5",
            margin: "0.75rem 0",
            padding: "0.75rem 1rem",
            ":hover": {
              backgroundColor: "lightgray",
              border: "none",
            },
            ":focus": {
              backgroundColor: "lightgray",
              border: "none",
            },
          }}
        >
          <AddIcon /> &nbsp;&nbsp;&nbsp; New To-do
        </Button>
        <Divider sx={{ backgroundColor: "lightgray" }} />
      </div>
      <CreateTaskModal
        show={openCreateTodoModal}
        handleClose={closeCreateTodo}
        handleSave={handleSave}
        categoryList={categoryList}
      />
    </div>
  );
};

export default TodoContainer;
