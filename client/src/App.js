import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Podcasts from "./pages/Podcasts";
import Episodes from "./pages/Episodes";
import NotFound from "./pages/NotFound";
import './styles/styles.css';

const App = () => (
  <Router>
  <React.Fragment>
    <Nav />
      <Switch>
        <Route exact path="/podcasts" component={Podcasts} />
        <Route exact path="/episodes/:id" component={Episode} />
        <Route path="/episodes" component={Episodes} />
        <Redirect from='/' to='/podcasts'/>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
