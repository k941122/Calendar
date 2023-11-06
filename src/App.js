import './App.css';
import Calendarcomponent from './calendar_componet';

function App() {
  return (
    <div className="App">
     <Calendarcomponent onChange={(date) => {console.log(date);}} value = {new Date()} />
    </div>
  );
}

export default App;
