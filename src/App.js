import { Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage}></Route>
    </Switch>
  );
}

export default App;
