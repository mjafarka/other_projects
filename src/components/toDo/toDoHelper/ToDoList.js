import React, { useState } from "react";
import "../index.scss";
import Element from "./htmlBlocks/Element";

const ToDoList = ({ name, list, handleCheckClick }) => {
  const completedItems = [];
  const pendingItem = [];
  const [rightClicked, setRightClicked] = useState(-1);

  const handleRightClick = (id) => {
    setRightClicked(id);
  }

  debugger

  for (let id in list) {
    if (name === "Completed" && list[id]) {
      completedItems.push(
        <Element id={id} list={list} handleCheckClick={handleCheckClick} rightClicked={rightClicked} setRightClicked={(id) => handleRightClick(id)} />
      );
    } else if (name === "Pending" && !list[id]) {
      pendingItem.push(
        <Element id={id} list={list} handleCheckClick={handleCheckClick} rightClicked={rightClicked} setRightClicked={(id) => setRightClicked(id)}/>
      );
    }
  }

  return (
    <div>
      <h4 className="checkedItem">{name === "Completed" ? "Checked Items" : ""}</h4>
      <div className="todos">
        {name === "Completed" ? completedItems : pendingItem}
      </div>
    </div>
  );
};

export default ToDoList;
