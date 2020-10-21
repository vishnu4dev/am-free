import React from "react";
import { 
	BrowserRouter as Router, 
	Route, 
	Switch 
} from 'react-router-dom'; 
import "./App.css";
import Explore from "./Container/Explore";
import LoginPage from "./Container/LoginPage";

function App() {
  return (
    <Router>
      <Switch >
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </Router>
  );
}

export default App;
