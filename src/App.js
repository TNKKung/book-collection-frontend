import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/Index";
import HomePage from "./pages/HomePage/Index";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/Login" component={LoginPage}></Route>
    </Switch>
  );
}

export default App;
