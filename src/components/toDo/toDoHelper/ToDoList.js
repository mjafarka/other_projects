import React, { useEffect, useState } from "react";
import "../index.scss";
import Element from "./htmlBlocks/Element";
import { isCheckedHandler } from "../miscelleneous/SingeUseFunctions";


const ToDoList = ({ todos, handleCheckClick, deleteTodos }) => {
  const [rightClicked, setRightClicked] = useState('ab');

  const [elements, setElements] = useState([]);

  const [checked, setChecked] = useState({});

  const handleRightClick = (id) => {
    setRightClicked(id);
  }


  useEffect(() => {
    console.log("refreshed");
    const tempElements = [];
    for (let id in todos) {
      tempElements.push(<Element id={id}
        handleCheckClick={handleCheckClick}
        rightClicked={rightClicked}
        setRightClicked={(id) => handleRightClick(id)}
        deleteTodos={(id) => deleteTodos(id)}
      />)
      async function checkId(id) {
        await isCheckedHandler(id).then(res => setChecked(prev => ({...prev,[id]:res})));
      }
      checkId(id);
    }
    setElements(tempElements);
  }, [rightClicked, todos]);

  const isChecked = (id) => {
    
  }

  return (
    <div>
      <div className="todos">
        {elements.filter(element => (!checked[element.props.id])).map(pend => {
          return pend;
        })}
        <h4>Completed</h4>
        {elements.filter(element => (checked[element.props.id])).map(pend => {
          return pend;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
