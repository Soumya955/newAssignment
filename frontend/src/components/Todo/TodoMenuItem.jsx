import { Divider } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteTaskModal from "./Modals/DeleteTaskModal";

const TodoMenuItem = ({
  selectCategory,
  name,
  icon,
  selectedItem,
  count,
  canDelete,
  deleteCategoryItem,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const deleteCategory = () => {
    deleteCategoryItem(name);
    setDeleteModal(false);
  };

  return (
    <>
      <button className="transparentBtn" onClick={() => selectCategory(name)}>
        <div
          className={classNames("menuItem", {
            selectedItem: selectedItem === name,
          })}
        >
          <span className="nameIcon truncate">
            {icon || <FiberNewIcon color="inherit" />}
            {name}
          </span>
          <span className="categoryItems">
            {canDelete && (
              <button className="transparentBtn" onClick={openDeleteModal}>
                <DeleteIcon sx={{ color: "red" }} />
              </button>
            )}
            {count}
          </span>
        </div>
        {(name === "Todo" || name === "Work") && (
          <Divider sx={{ backgroundColor: "lightgray" }} />
        )}
      </button>
      <DeleteTaskModal
        show={deleteModal}
        handleClose={closeDeleteModal}
        deleteTodo={deleteCategory}
      />
    </>
  );
};

export default TodoMenuItem;
