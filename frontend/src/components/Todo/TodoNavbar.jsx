import React from "react";
import "../../styles/TodoNavbar.css";
const dayjs = require("dayjs");

const TodoNavbar = ({ selectedItem }) => {
  const date = dayjs(new Date());
  const formattedDate = date.format("ddd DD MMM YYYY");

  return (
    <div className="todoNavbarContainer">
      <div className="daySection">
        <div className="category">{selectedItem}</div>
        <div className="currentDate">{formattedDate}</div>
      </div>
    </div>
  );
};

export default TodoNavbar;
