import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider, provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainers from "./components/UserContainer";
import UsersContainerHooks from "./components/UsersContainerHooks";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
        {/* <UserContainers /> */}
        <UsersContainerHooks />
      </div>
    </Provider>
  );
}

export default App;
