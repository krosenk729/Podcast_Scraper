import React, { Component } from "react";
import API from "../../utils/API";
import {TabPanel, Panel} from "../..components/Panel";
import AddPodcast from "./AddPodcast";

class Episode extends Component {
  state = {
    podcasts: []
  };

  // **************************************************************/
  // Load Data on Component Mount  

  componentDidMount() {
    API.getPodcasts()
    .then(res => this.setState({ podcasts: res.data }) )
    .catch(err => console.log(err));
  }

  // **************************************************************/
  // Add and Delete Podcasts

  handleAddPodcast = data =>{
    API.savePodcast(data)
    .then(res => this.setState({ podcasts: [res.data, ...this.state.podcasts]}))
    .catch(err => console.log(err));
  }

  handleDeletePodcast = index =>{
    API.deletePodcast(index)
    .then(res => this.setState({ podcasts: this.state.podcasts.filter(podcast => podcast._id !== index)}))
    .catch(err => console.log(err));
  }

  // **************************************************************/
  // Render

  render() {
    const tabs = 
    return (
        <React.Fragment>
        <div>Hero</div>
        <TabPanel>
        <Panel title="Podcasts" index=0>
        
        </Panel>
        <Panel title="Add New" index=0>
        <AddPodcast handleAddPodcast={this.handleAddPodcast} />
        </Panel>
        </TabPanel>
        </React.Fragment>
    );
  }
}

export default Episode;
