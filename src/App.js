import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyCollectionPage from "./pages/MyCollectionPage/MyCollectionPage.js";
import PageBookDetail from "./pages/PageBookDetail/PageBookDetail";
import AddCollectionPage from "./pages/AddCollectionPage/AddCollectionPage";

function App() {
  if (
    localStorage["nightwind-mode"] === "dark" ||
    (!("nightwind-mode" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/Login" component={LoginPage}/>
      <Route exact path="/register" component={RegisterPage}/>
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/mycollection" component={MyCollectionPage} />
      <Route exact path="/pagebookdetail" component={PageBookDetail} />
      <Route exact path="/addcollection" component={AddCollectionPage} />
    </Switch>
  );
}

export default App;
