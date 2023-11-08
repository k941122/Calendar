import './App.css';
import Calendarcomponent from './calendar_componet';
import Todolist from './todo';

function App() {
  return (
    <div className="App">
     <Calendarcomponent onChange={(date) => {console.log(date);}} value = {new Date()} />
     <Todolist/>
    </div>
  );
}

export default App;
