import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Shared/Nav";
import Scraped from "./components/Scraped";
import Episode from "./components/Episode";
import Saved from "./components/Saved";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
  <React.Fragment>
    <Nav />
    <div className='container'>
      <Switch>
        <Route exact path="/" component={Scraped} />
        <Route exact path="/podcast" component={Saved} />
        <Route exact path="/podcast/:id" component={Episode} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </React.Fragment>
  </Router>
);

export default App;
