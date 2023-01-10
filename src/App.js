import { Provider } from "react-redux";
import store from "./components/redux/store";
import "./App.css";
import { UseRef } from "./components/UseRef";
import { Counter, HOCGreen, HOCRed } from "./components/HOC";
import CakeContainer from "./CakeContainer";
import { HooksCakeContainer } from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <HOCGreen cmp={Counter} />
        <HOCRed cmp={Counter} />
        <UseRef />
      </div>
    </Provider>
  );
}
export default App;
