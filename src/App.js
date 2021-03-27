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
import LiveChat from "./components/LiveChat/LiveChat";
import CreatePost from "./components/CreatePost/CreatePost";
import MyPosts from "./components/MyPosts/MyPosts";
import OnBoarding from "./components/OnBoarding/OnBoarding";
import PostDetails from "./components/PostDetails/PostDetails";
import Home from "./components/Home/Home";
import EditPost from "./components/EditPost/EditPost";
import Profile from "./components/Profile/Profile";

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
          <Redirect to={{ pathname: "/login" }}></Redirect>
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
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/tips">
            <Tips />
          </Route>
          <Route path="/motivation">
            <Motivation />
          </Route>
          <Route path="/postDetails/:postId">
            <PostDetails />
          </Route>

          <SecuredRoute
            exact
            path="/myPosts/editPost/:postId"
            component={EditPost}
          ></SecuredRoute>

          <SecuredRoute
            exact
            path="/onBoarding/:userId"
            component={OnBoarding}
          ></SecuredRoute>

          <SecuredRoute
            exact
            path="/community"
            component={Community}
          ></SecuredRoute>

          <SecuredRoute
            exact
            path="/dashboard/:userId"
            component={Dashboard}
          ></SecuredRoute>

          <SecuredRoute
            exact
            path="/achievements"
            component={Achievements}
          ></SecuredRoute>

          <SecuredRoute
            exact
            path="/livechat"
            component={LiveChat}
          ></SecuredRoute>

          <SecuredRoute
            exact
            path="/createPost"
            component={CreatePost}
          ></SecuredRoute>

          <SecuredRoute
            exact
            path="/myPosts"
            component={MyPosts}
          ></SecuredRoute>

          <SecuredRoute
            exact
            path="/profile"
            component={Profile}
          ></SecuredRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
