import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import React, { useState } from "react";
import "../../styles/Todo.css";
import TodoContainer from "./TodoContainer";
import TodoSidebar from "./TodoSidebar";
import swal from "sweetalert";

let menuList = [
  {
    name: "All",
    icon: <AssignmentTurnedInIcon color="success" />,
  },
  {
    name: "My Day",
    icon: <LightModeOutlinedIcon color="secondary" />,
    type: "category",
  },
  {
    name: "Important",
    icon: <GradeOutlinedIcon color="success" />,
    type: "category",
  },
  {
    name: "Todo",
    icon: <HomeOutlinedIcon color="warning" />,
    type: "category",
  },
  {
    name: "Groceries",
    icon: <LocalGroceryStoreIcon color="primary" />,
    type: "subCategory",
  },
  {
    name: "Home",
    icon: <FormatListBulletedIcon color="secondary" />,
    type: "subCategory",
  },
  {
    name: "Europe Trip",
    icon: <FlightTakeoffIcon color="primary" />,
    type: "subCategory",
  },
  {
    name: "Work",
    icon: <WorkIcon color="warning" />,
    type: "subCategory",
  },
];

const Todo = () => {
  const addedCategories = localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories"))
    : [];
  // categories from localstorage
  const [addedCategory, setAddedCategory] = useState(addedCategories);

  // categories from menu list
  const [categoryList, setCategoryList] = useState([
    ...menuList,
    ...addedCategory,
  ]);

  let storedTodo = localStorage.getItem("TodoItems")
    ? JSON.parse(localStorage.getItem("TodoItems"))
    : [];
  const [todoList, setTodoList] = useState(storedTodo);
  const [selectedItem, setSelectedItem] = useState("All");

  const addCategory = (categoryName) => {
    if (
      categoryList.find(
        ({ name }) => name.toLowerCase() === categoryName.toLowerCase()
      )
    ) {
      swal("This category is already exists");
      return;
    } else {
      setCategoryList((categoryList) => [
        ...categoryList,
        { name: categoryName, added: true, type: "subCategory" },
      ]);
      setAddedCategory((addedCategory) => [
        ...addedCategory,
        { name: categoryName, added: true, type: "subCategory" },
      ]);
      localStorage.setItem(
        "categories",
        JSON.stringify([
          ...addedCategory,
          { name: categoryName, added: true, type: "subCategory" },
        ])
      );
    }
  };

  const deleteCategoryItem = (deletedCategory) => {
    const updatedCategoryItem = categoryList.filter(
      ({ name }) => name !== deletedCategory
    );
    setCategoryList((categoryList) => updatedCategoryItem);

    const updatedAddedCategory = addedCategory.filter(
      ({ name }) => name !== deletedCategory
    );

    setAddedCategory(updatedAddedCategory);
    localStorage.setItem("categories", JSON.stringify(updatedAddedCategory));
  };

  const addTodoItem = (newTodo) => {
    localStorage.setItem("TodoItems", JSON.stringify([...todoList, newTodo]));
    setTodoList((todoList) => [...todoList, newTodo]);
  };

  const updateTodoItem = (updatedTodo) => {
    let updatedTodoList = todoList.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    localStorage.setItem("TodoItems", JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

  const deleteTodoItem = (deletedTodo) => {
    let updatedTodoList = todoList.filter((todo) => todo.id !== deletedTodo.id);
    localStorage.setItem("TodoItems", JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

  const filteredTodo =
    selectedItem === "All"
      ? todoList
      : todoList.filter(
          ({ category, subCategory }) =>
            category === selectedItem || subCategory === selectedItem
        );

  return (
    <>
      <div className="TodoBody">
        <TodoSidebar
          categoryList={categoryList}
          addCategory={addCategory}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          unfilteredTodoList={todoList}
          totalCount={todoList.length}
          deleteCategoryItem={deleteCategoryItem}
        />
        <TodoContainer
          categoryList={categoryList}
          todoList={filteredTodo}
          addTodo={addTodoItem}
          updateTodoItem={updateTodoItem}
          deleteTodoItem={deleteTodoItem}
          selectedItem={selectedItem}
        />
      </div>
    </>
  );
};

export default Todo;
