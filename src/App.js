import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Community from "./components/Community/Community";
import Tips from "./components/Tips/Tips";
import Motivation from "./components/Motivation/Motivation";
import Achievements from "./components/Achievements/Achievements";

export const authentication = {
  isLoggedIn: false,

  onAuthentication() {
    this.isLoggedIn = true;
  },

  onLogout() {
    this.isLoggedIn = false;
  },

  getLogInStatus() {
    return this.isLoggedIn;
  },
};

export const SecuredRoute = (props) => {
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLogInStatus() ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/tips">
            <Tips />
          </Route>
          <Route path="/motivation">
            <Motivation />
          </Route>
          <Route path="/achievements">
            <Achievements />
          </Route>
          {/* <SecuredRoute path="/dashboard" component={Dashboard}></SecuredRoute> */}
          {/* <SecuredRoute path="/community" component={Community}></SecuredRoute> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
