import React, { useState } from "react";
import CheckBox from "../checkBox";
import "./Element.scss";

function Element(props) {
  const { id, list, handleCheckClick, setRightClicked, rightClicked } = props;

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
            checked={list[id] ? true : false}
            onComplete={() => handleCheckClick(id)}
            className="checkBox"
          />
          {!editClicked ? <p>{id}</p> : <input type="text" placeholder="" value={id} ></input>}
        </div>
        <div style={{ display: id === rightClicked ? "inline-block" : "none" }}>
          {!editClicked ? (
            <>
              <button onClick={() => setEditClicked(true)}>Edit</button>
              <button>Delete</button>
            </>
          ) : <button>Update</button>}

        </div>
      </label>
    </div>
  );
}

export default Element;
