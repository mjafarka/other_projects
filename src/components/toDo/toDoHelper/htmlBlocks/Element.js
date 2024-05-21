import React, { useState } from "react";
import CheckBox from "../checkBox";
import "./Element.scss";
import { getTaskFromId, isChecked } from "../../../dummyDB/db";

function Element(props) {
  const { id, handleCheckClick, setRightClicked, rightClicked } = props;

  const [editClicked, setEditClicked] = useState(false);
  
  const rightClickHandler = (e) => {
    e.preventDefault();
    setRightClicked(id);
  };


  return (
    <div>
      <label key={id} onContextMenu={(e) => rightClickHandler(e, id)}>
        <div className="textAndCheckBox">
          <CheckBox
            style={{ display: id === rightClicked ? "none" : "inline-block" }}
            checked={isChecked(id) ? true : false}
            onComplete={() => handleCheckClick(id)}
            className="checkBox"
          />
          {editClicked && id === rightClicked ? <input type="text" placeholder="" value={getTaskFromId(id)} ></input> : <p>{getTaskFromId(id)}</p>}
        </div>
      </label>
      <div style={{ display: id === rightClicked ? "inline-block" : "none" }}>
        {console.log("id", id, "rightClicked", rightClicked)}
        {!editClicked ? (
          <>
            <button onClick={() => setEditClicked(true)}>Edit</button>
            <button>Delete</button>
          </>
        ) : <button>Update</button>}
      </div>
    </div>
  );
}

export default Element;
