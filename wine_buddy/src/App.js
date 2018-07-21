import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wine from "./pages/Wine";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import SignupForm from "./pages/SignupForm";
import SigninPage from "./pages/SigninPage";

const App = () => (
  <Router>
    <div>
      {/* App.js will include a switch component and then routes for each URL */}
      {/* The 'component={Home} is telling it what page to render.  It will be in the 'pages' folder */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/wine_pair" component={Wine} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path ="/no_match" component={NoMatch} />
        <Route exact path ="/signin" component={SigninPage} />
        <Route exact path ="/signup" component={SignupForm} />
      </Switch>
    </div>
  </Router>
);

export default App;
