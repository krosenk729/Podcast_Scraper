import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Podcast from "./components/Podcast";
import Episode from "./components/Episode";
import NoMatch from "./components/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
  <React.Fragment>
    <Nav />
    <div className='container'>
      <Switch>
        <Route exact path="/" component={Podcast} />
        <Route exact path="/podcast" component={Podcast} />
        <Route exact path="/podcast/:id" component={Episode} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    </React.Fragment>
  </Router>
);

export default App;
