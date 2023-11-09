import "./App.css";
import Calendarcomponent from "./page/calendar_componet";
import Todolist from "./page/todo";
import GlobalStyle from "./global_style";

function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <Calendarcomponent
          onChange={(date) => {
            console.log(date);
          }}
          value={new Date()}
        />
      </div>
      <Todolist />
    </GlobalStyle>
  );
}

export default App;
