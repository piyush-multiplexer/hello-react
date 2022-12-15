import "./App.css";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
function App() {
  return (
    <div className="App">
      <Greet sn="Goyani" name="Piyush" />
      <Greet sn="Gabani" name="Yash">
        <button>Login</button>
      </Greet>
      <Greet>
        <p>This is child prop</p>
      </Greet>
      <Message />
    </div>
  );
}

export default App;
