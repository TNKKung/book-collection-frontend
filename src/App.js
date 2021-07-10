import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage.js";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/Login" component={LoginPage}/>
      <Route exact path="/register" component={RegisterPage} />
      <Route exact Path="/profile" component={ProfilePage}/>
    </Switch>
  );
}

export default App;
