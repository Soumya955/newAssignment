import React, { useState } from "react";
import "../../styles/TodoSidebar.css";
import FaceIcon from "@mui/icons-material/Face";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import TodoMenuItem from "./TodoMenuItem";
import CreateCategoryModal from "./Modals/CreateCategoryModal";

const TodoSidebar = ({
  categoryList,
  addCategory,
  setSelectedItem,
  selectedItem,
  unfilteredTodoList,
  totalCount,
  deleteCategoryItem,
}) => {
  const [openCreateCategory, setOpenCreateCategory] = useState(false);

  const selectCategory = (name) => {
    setSelectedItem(name);
  };

  const closeCreateCategoryModal = () => {
    setOpenCreateCategory(false);
  };

  const openCreateCategoryModal = () => {
    setOpenCreateCategory(true);
  };

  return (
    <div className="todoSidebar">
      <div className="userSection">
        <div className="userData">
          <div className="userIcon">
            <FaceIcon color="info" />
          </div>
          <span className="userName">Soumyaranjan Badajena</span>
        </div>
        <div className="searchIcon">
          <SearchIcon color="" />
        </div>
      </div>
      <div className="menuList">
        {categoryList.map((category) => {
          const { name, icon } = category;
          const count =
            name === "All"
              ? totalCount
              : unfilteredTodoList.filter(
                  ({ category, subCategory }) =>
                    category === name || subCategory === name
                ).length;
          return (
            <TodoMenuItem
              selectCategory={selectCategory}
              name={name}
              icon={icon}
              selectedItem={selectedItem}
              count={count}
              canDelete={category?.added}
              deleteCategoryItem={deleteCategoryItem}
            />
          );
        })}
      </div>
      <Button
        onClick={openCreateCategoryModal}
        variant="outlined"
        sx={{
          backgroundColor: "transparent",
          width: "100%",
          border: "none",
          borderRadius: "4px",
          height: "46px",
          display: "flex",
          justifyContent: "flex-start",
          fontWeight: "500",
          letterSpacing: "0.25px",
          fontSize: "16px",
          color: "#42a5f5",
          ":hover": {
            backgroundColor: "lightgray",
            border: "none",
          },
        }}
      >
        <AddIcon /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New Category
      </Button>
      <CreateCategoryModal
        show={openCreateCategory}
        handleClose={closeCreateCategoryModal}
        addCategory={addCategory}
      />
    </div>
  );
};

export default TodoSidebar;
