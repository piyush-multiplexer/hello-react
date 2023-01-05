import { Provider } from "react-redux";
import store from "./components/redux/store";
import "./App.css";
import { UseRef } from "./components/UseRef";
import { Counter, HOCGreen, HOCRed } from "./components/HOC";
import CakeContainer from "./CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HOCGreen cmp={Counter} />
        <HOCRed cmp={Counter} />
        <UseRef />
      </div>
    </Provider>
  );
}
export default App;
