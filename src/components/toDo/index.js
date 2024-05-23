import React, { useMemo, useState } from "react";
import { addTodo, deleteTodosFromDB, getTaskFromDate, toggleTodoCheckBox } from "../dummyDB/db";
import "./index.scss";
import { createUniqueId } from "./miscelleneous/SingeUseFunctions";
import ToDoList from "./toDoHelper/ToDoList";

function ToDo({date}) {
  const [todos, setTodos] = useState({});
  const [input, setInput] = useState("");
  useMemo(() => {
    setTodos(getTaskFromDate(date));
  }, [date]);

  const handleCheckClick = (id) => {
    toggleTodoCheckBox(id);
    let currStatus = todos[id].status;
    setTodos({ ...todos, [id] : {...todos[id], status: !currStatus}});
  };

  const appendInput = (val) => {
    setInput(val);
  };

  const submitInput = (input) => {
    debugger
    let id = createUniqueId();
    setTodos({ ...todos, [id]: {task: {input}, status: false} });
    addTodo(id, input, date);
    setInput("");
  };

  const deleteTodos = (id) => {
    deleteTodosFromDB(id, date);
    setTodos(getTaskFromDate(date));
  }

  return (
    <div className="todo">
      <h3 className="todosHeading">TODOS</h3>
      <ToDoList
        todos={todos}
        handleCheckClick={handleCheckClick}
        deleteTodos={(id) => deleteTodos(id)}
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
