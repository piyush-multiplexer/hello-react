import "./App.css";
import "./appStyles.css";
import styles from "./appStyles.module.css";

import { ClickHandler } from "./components/ClickHandler";
import { Form } from "./components/Form";
import { Greet } from "./components/Greet";
import { ListUseEffect } from "./components/ListUseEffect";
import { Message } from "./components/Message";
import { NameList } from "./components/NameList";
import { ParentComponent } from "./components/ParentComponent";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { UserGreeting } from "./components/UserGreeting";
function App() {
  return (
    <div className="App">
      <ListUseEffect />
      <Greet sn="Goyani" name="Piyush" />
      <Greet sn="Gabani" name="Yash">
        <button>Login</button>
      </Greet>
      <Greet>
        <p>This is child prop</p>
      </Greet>
      <Form />
      <PostForm />
      <Message />
      <ClickHandler />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <PostList />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
