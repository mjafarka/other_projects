
import { useState } from 'react';
import './App.css';
import Calender from './components/calender';
import ToDo from './components/toDo';
function App() {

  const [clickedDate, setClickedDate] = useState(new Date().toString().slice(4,15))

  const todoDateHandler = (date) => {
    setClickedDate(date);
  }

  return (
    <div className="App">
      <Calender className="calender" passDate={todoDateHandler}/>
      <ToDo date={clickedDate}/>
    </div>
  );
}

export default App;
