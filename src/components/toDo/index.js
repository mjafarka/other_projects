import React, { useMemo, useState } from "react";
import "./index.scss";
import ToDoList from "./toDoHelper/ToDoList";

function ToDo() {
  const [pending, setPending] = useState({});
  const [input, setInput] = useState("");
  useMemo(() => {
    setPending({ ...pending, 1: true, 2: false });
  }, []);

  const handleCheckClick = (prop) => {
    setPending({ ...pending, [prop]: !pending[prop] });
    console.log("pending", pending, "    prop : ", prop);
  };

  const appendInput = (val) => {
    debugger;
    setInput(val);
  };

  const submitInput = (input) => {
    setPending({ ...pending, [input]: false });
    setInput("");
  };

  return (
    <div className="todo">
      <h3 className="todosHeading">TODOS</h3>
      <ToDoList
        name={"Pending"}
        list={pending}
        handleCheckClick={handleCheckClick}
      />
      <div className="appendInput">
      <div>
        <input
          type="text"
          placeholder="add task.."
          value={input}
          onChange={(e) => appendInput(e.target.value)}
        ></input>
        <button onClick={() => submitInput(input)}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
