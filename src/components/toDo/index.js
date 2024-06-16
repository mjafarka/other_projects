import React, { useMemo, useState } from "react";
import { addTodo, deleteTodosFromDB, getTaskFromDate, toggleTodoCheckBox } from "../dummyDB/db";
import "./index.scss";
import { createUniqueId } from "./miscelleneous/SingeUseFunctions";
import ToDoList from "./toDoHelper/ToDoList";

function ToDo({date}) {
  const [todos, setTodos] = useState({});
  const [input, setInput] = useState("");
  useMemo(async() => {
    setTodos(await getTaskFromDate(date));
  }, [date]);

  const handleCheckClick = async (id) => {
    await toggleTodoCheckBox(id).then(() => {
      let currStatus = todos[id].status;
      setTodos({ ...todos, [id] : {...todos[id], status: !currStatus}});
    }).catch(err => {
      console.log("error in handleCheckClick");
    })
  };

  const appendInput = (val) => {
    setInput(val);
  };

  const submitInput = async (input) => {
    debugger
    let id = createUniqueId();
    setTodos({ ...todos, [id]: {task: {input}, status: false} });
    await addTodo(id, input, date);
    setInput("");
  };

  const deleteTodos = async (id) => {
    await deleteTodosFromDB(id);
    setTodos(await getTaskFromDate(date));
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
