import React from "react";
import CheckBox from "../checkBox";
import "./Element.scss";

function Element(props) {
  const { id, list, handleCheckClick, setRightClicked, rightClicked } = props;
console.log("right clicked", rightClicked);

  const rightClickHandler = (e) => {
    e.preventDefault();
    setRightClicked(id);
  };


  return (
    <div>
      <label key={id} onContextMenu={(e) => rightClickHandler(e,id)}>
        <div className="textAndCheckBox">
          <CheckBox
            style={{ display: id === rightClicked ? "none" : "inline-block" }}
            checked={list[id] ? true : false}
            onComplete={() => handleCheckClick(id)}
            className="checkBox"
          />
          <p>{id}</p>
        </div>
        <div style={{ display: id === rightClicked ? "inline-block" : "none" }}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </label>
    </div>
  );
}

export default Element;
