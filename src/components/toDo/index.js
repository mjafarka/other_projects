import React, { useMemo, useState } from "react";
import "./index.scss";
import ToDoList from "./toDoHelper/ToDoList";
import { getTaskFromDate, setDayTasks, setDayTasksStatus } from "../dummyDB/db";

function ToDo({date}) {
  const [pending, setPending] = useState({});
  const [input, setInput] = useState("");
  useMemo(() => {
    setPending(getTaskFromDate(date));
  }, [date]);

  const handleCheckClick = (prop) => {
    setDayTasksStatus(prop, date, !pending[prop]);
    setPending({ ...pending, [prop]: !pending[prop] });
  };

  const appendInput = (val) => {
    debugger;
    setInput(val);
  };

  const submitInput = (input) => {
    console.log("input",input);
    setPending({ ...pending, [input]: false });
    setDayTasks(input,date);
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
