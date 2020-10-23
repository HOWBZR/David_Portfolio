import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./tailwind.output.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/Landing";
import Projects from "./components/layout/Projects";
import "./App.css";




const App = () => (
  <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={Projects} />
        </Switch>
  </Router>
);

export default App;
