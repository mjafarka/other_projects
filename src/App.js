
import './App.css';
import Calender from './components/calender';
import ToDo from './components/toDo';
import CheckBox from './components/toDo/toDoHelper/checkBox';

function App() {
  return (
    <div className="App">
      <Calender className="calender"/>
      <ToDo/>
    </div>
  );
}

export default App;
