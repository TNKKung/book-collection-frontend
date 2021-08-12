import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyCollectionPage from "./pages/MyCollectionPage/MyCollectionPage.js";
import DisplayPage from "./pages/MyCollectionPage/component/DisplayPage";
import PageLayout from "./components/PageLayout/PageLayout";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/mycollection" component={MyCollectionPage} />
      <Route exact path="/displaypage" component={DisplayPage} />
      <Route exact path="/page" component={PageLayout} />
    </Switch>
  );
}

export default App;
