import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import {TabPanel, Panel} from "../../components/TabbedPanel";

class Episode extends Component {
  state = {
    scraped: [],
    saves: []
  };

  // **************************************************************/
  // Load Data on Component Mount  

  componentDidMount() {
    this.loadPodcasts();
  }

  // load saved podcasts from endpoint
  // then load scrapes
  loadPodcasts = () => {
    API.getPodcasts()
    .then(res => this.setState({ saves: res.data }) )
    .then(() => this.loadScrapes() )
    .catch(err => console.log(err));
  };

  // load scraped podcasts from endpoint 
  // and identify as saved/unsaved
  loadScrapes = () => {
    API.getScrapes()
    .then(res => res.data )
    .then(data => data.filter(scrape => this.state.saves.every(saved => saved.link != scrape.link) ))
    .then(data => this.setState({ scraped: data }))
    .catch(err => console.log(err));
  };


  // **************************************************************/
  // Render

  render() {
    return (
        <React.Fragment>
        <div>Hero</div>
        <TabPanel>
        <Panel title="Katherine" index="0">
        Katherine
        </Panel>
        </TabPanel>
        </React.Fragment>
    );
  }
}

export default Episode;
