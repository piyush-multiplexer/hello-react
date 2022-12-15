import "./App.css";
import { ClickHandler } from "./components/ClickHandler";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { ParentComponent } from "./components/ParentComponent";
import { UserGreeting } from "./components/UserGreeting";
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
      <ClickHandler />
      <ParentComponent />
      <UserGreeting />
    </div>
  );
}

export default App;
