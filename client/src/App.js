import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import SearchDash from "./Pages/SearchDash";
import "./App.css";

// handlePageChange = () => {};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/searchdash" component={SearchDash} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
