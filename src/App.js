import "./App.css";
import "./appStyles.css";
import styles from "./appStyles.module.css";

import { ClickHandler } from "./components/ClickHandler";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { NameList } from "./components/NameList";
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
      <NameList />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
