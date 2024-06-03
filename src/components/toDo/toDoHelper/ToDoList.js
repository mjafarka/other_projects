import React, { useEffect, useState } from "react";
import "../index.scss";
import Element from "./htmlBlocks/Element";
import { isCheckedHandler } from "../miscelleneous/SingeUseFunctions";


const ToDoList = ({ todos, handleCheckClick, deleteTodos }) => {
  const [rightClicked, setRightClicked] = useState('ab');

  const [elements, setElements] = useState([]);

  const handleRightClick = (id) => {
    setRightClicked(id);
  }


  //from list we are getting the object {1:true}

  useEffect(() => {
    const tempElements = [];
    for (let id in todos) {
      tempElements.push(<Element id={id}
        list={todos}
        handleCheckClick={handleCheckClick}
        rightClicked={rightClicked}
        setRightClicked={(id) => handleRightClick(id)}
        deleteTodos={(id) => deleteTodos(id)}
      />)
    }
    setElements(tempElements);
  }, [rightClicked, todos]);
  return (
    <div>
      {/* <h4 className="checkedItem">{name === "Completed" ? "Checked Items" : ""}</h4> */}
      <div className="todos">
        {elements.filter(element => (!isCheckedHandler(element.props.id))).map(pend => {
          return pend;
        })}
        <h4>Completed</h4>
        {elements.filter(element => (isCheckedHandler(element.props.id))).map(pend => {
          return pend;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
