import "./App.css";
import { Counter, HOCGreen, HOCRed } from "./components/HOC";
import { UseRef } from "./components/UseRef";

function App() {
  return (
    <div className="App">
      <HOCGreen cmp={Counter} />
      <HOCRed cmp={Counter} />
      <UseRef />
    </div>
  );
}
export default App;
