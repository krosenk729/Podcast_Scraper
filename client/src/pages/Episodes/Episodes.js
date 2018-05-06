import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

import {TabPanel, Panel} from "../..components/Panel";

class Episode extends Component {
  state = {
    scraped: [],
    saves: []
  };

  // **************************************************************/
  // Load Data on Component Mount  
  componentDidMount() {
    
  }


  // **************************************************************/
  // Render

  render() {
    const tabs = 
    return (
        <React.Fragment>
        <div>Hero</div>
        <TabPanel>
        <Panel title="Katherine" index=0>
        Katherine
        </Panel>
        </TabPanel>
        </React.Fragment>
    );
  }
}

export default Episode;
