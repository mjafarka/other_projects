import React, { useMemo, useState } from "react";
import CheckBox from "../checkBox";
import "./Element.scss";
import { deleteTodosFromDB, getTaskFromId, isChecked, updateTodos } from "../../../dummyDB/db";
import { isCheckedHandler } from "../../miscelleneous/SingeUseFunctions";

function Element(props) {
  const { id, handleCheckClick, setRightClicked, rightClicked, deleteTodos } = props;

  const [editClicked, setEditClicked] = useState(false);
  const [value, setValue] = useState('');

  useMemo( async () => {
    let val = await getTaskFromId(id);
    setValue(val);
    console.log(val, "edit clicked", editClicked)
    // console.log("current : ", id, "  ; right clicked : ", rightClicked );
  },[])
  
  const rightClickHandler = (e) => {
    e.preventDefault();
    setRightClicked(id);
  };

  const updateInputHandler = (e) => {
    setValue(e.target.value);
  }

  const updateHandler = async() => {
    await updateTodos(id,value);
    setRightClicked(false);
    setEditClicked(false);
  }

  const handleDelete = (id) => {
    deleteTodos(id)
  }


  const checker = async () => {
    if (editClicked && id === rightClicked) 
      console.log("checker ;" ,"true")
    else
      console.log("checker ;" ,"false")

    let task = await getTaskFromId(id);
    console.log("task ckecker", task)
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
          {console.log("came here")}
          {editClicked && id === rightClicked ? <input type="text" placeholder="" value={value} onChange={(e) => updateInputHandler(e)} ></input> : <p>{value}</p>}
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
