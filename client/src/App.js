import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Shared/Nav";
import Podcasts from "./components/Podcasts";
import Episode from "./components/Episode";
import NotFound from "./components/NotFound";
import './styles/styles.css';

const App = () => (
  <Router>
  <React.Fragment>
    <Nav />
    <main className="main">
      <Switch>
        <Route exact path="/" component={Podcasts} />
        <Route exact path="/podcast/:id" component={Episode} />
        <Route component={NotFound} />
      </Switch>
    </main>
    </React.Fragment>
  </Router>
);

export default App;
