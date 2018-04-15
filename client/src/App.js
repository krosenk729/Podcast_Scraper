import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Podcast from "./pages/Podcast";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Podcast} />
        <Route exact path="/podcast" component={Podcast} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
