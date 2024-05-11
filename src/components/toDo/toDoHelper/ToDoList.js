import React, { useEffect, useState } from "react";
import "../index.scss";
import Element from "./htmlBlocks/Element";


const ToDoList = ({ name, list, handleCheckClick }) => {
  const [rightClicked, setRightClicked] = useState(-1);

  const [elements, setElements] = useState([]);

  const handleRightClick = (id) => {
    setRightClicked(id);
  }

  //from list we are getting the object {1:true}

  useEffect(() => {
    const tempElements = [];
    for (let id in list) {
      tempElements.push(<Element id={id}
        list={list}
        handleCheckClick={handleCheckClick}
        rightClicked={rightClicked}
        setRightClicked={(id) => handleRightClick(id)} />)
    }
    setElements(tempElements);
  }, [rightClicked, list]);
  return (
    <div>
      {/* <h4 className="checkedItem">{name === "Completed" ? "Checked Items" : ""}</h4> */}
      <div className="todos">
        {elements.filter(element => (!element.props.list[element.props.id])).map(pend => {
          return pend;
        })}
        <h4>Completed</h4>
        {elements.filter(element => (element.props.list[element.props.id])).map(pend => {
          return pend;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
