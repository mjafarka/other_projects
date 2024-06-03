import React, { useState } from "react";
import CheckBox from "../checkBox";
import "./Element.scss";
import { deleteTodosFromDB, getTaskFromId, isChecked, updateTodos } from "../../../dummyDB/db";
import { isCheckedHandler } from "../../miscelleneous/SingeUseFunctions";

function Element(props) {
  const { id, handleCheckClick, setRightClicked, rightClicked, deleteTodos } = props;

  const [editClicked, setEditClicked] = useState(false);
  const [value, setValue] = useState(getTaskFromId(id));
  
  const rightClickHandler = (e) => {
    e.preventDefault();
    setRightClicked(id);
  };

  const updateInputHandler = (e) => {
    setValue(e.target.value);
  }

  const updateHandler = () => {
    updateTodos(id,value);
    setRightClicked(false);
    setEditClicked(false);
  }

  const handleDelete = (id) => {
    deleteTodos(id)
  }


  return (
    <div>
      <label key={id} onContextMenu={(e) => rightClickHandler(e, id)}>
        <div className="textAndCheckBox">
          <CheckBox
            style={{ display: id === rightClicked ? "none" : "inline-block" }}
            checked={isCheckedHandler(id) ? true : false}
            onComplete={() => handleCheckClick(id)}
            className="checkBox"
          />
          {editClicked && id === rightClicked ? <input type="text" placeholder="" value={value} onChange={(e) => updateInputHandler(e)} ></input> : <p>{getTaskFromId(id)}</p>}
        </div>
      </label>
      <div style={{ display: id === rightClicked ? "inline-block" : "none" }}>
        {!editClicked ? (
          <>
            <button onClick={() => setEditClicked(true)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </>
        ) : <button onClick={updateHandler}>Update</button>}
      </div>
    </div>
  );
}

export default Element;
