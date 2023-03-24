import { Checkbox, Divider } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UpdateTaskModal from "./Modals/UpdateTaskModal";
import DeleteTaskModal from "./Modals/DeleteTaskModal";

const TaskCard = ({
  taskData,
  categoryList,
  updateTodoItem,
  deleteTodoItem,
}) => {
  const { todo, category, completed } = taskData;
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleChange = (e) => {
    updateTodoItem({ ...taskData, completed: !taskData.completed });
  };

  const updateTodo = (updatedTodo) => {
    updateTodoItem(updatedTodo);
    setOpenEdit(false);
  };
  const deleteTodo = () => {
    deleteTodoItem(taskData);
    setOpenDelete(false);
  };

  const openEditModal = () => {
    setOpenEdit(true);
  };

  const closeEditModal = () => {
    setOpenEdit(false);
  };

  const openDeleteModal = () => {
    setOpenDelete(true);
  };

  const closeDeleteModal = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <div className="taskCard">
        <div className="cardLeftBox">
          <Checkbox
            checked={completed}
            color="success"
            onClick={handleChange}
          />
          <div className="taskData">
            <div
              className="taskName truncate"
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {todo}
            </div>
            <div className="taskCategory">{category}</div>
          </div>
        </div>
        <div className="cardRightBox">
          <button className="transparentBtn" onClick={openEditModal}>
            <EditIcon sx={{ color: "red" }} />
          </button>
          <button className="transparentBtn" onClick={openDeleteModal}>
            <DeleteIcon sx={{ color: "red" }} />
          </button>
        </div>
      </div>
      <Divider sx={{ backgroundColor: "lightgray" }} />
      <UpdateTaskModal
        show={openEdit}
        handleClose={closeEditModal}
        handleSave={updateTodo}
        categoryList={categoryList}
        taskData={taskData}
      />
      <DeleteTaskModal
        show={openDelete}
        handleClose={closeDeleteModal}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TaskCard;
