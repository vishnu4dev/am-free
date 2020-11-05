import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Explore from "./Container/Explore";
import LoginPage from "./Container/LoginPage";
import AddNewPost from "./Container/AddNewPost";
import Test from "./Test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/addNewPost" component={AddNewPost} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
