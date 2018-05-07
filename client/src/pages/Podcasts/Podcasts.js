import React, { Component } from "react";
import API from "../../utils/API";
import { Hero } from "../../components/Hero";
import {Panel, TabPanel} from "../../components/TabbedPanel";
import {Card, CardBody, CardActions, CardImg} from "../../components/Card";
import AddPodcast from "./AddPodcast";

class Podcasts extends Component {
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
    const renderPodcast = pod => (
      <Card key={pod._id}>
      
      <CardImg img={pod.img} />

      <CardBody>
      <h3>{pod.podcast}</h3>
      <a href={pod.link} target="_blank">{pod.link}</a>
      </CardBody>

      <CardActions>
      <button className="btn" onClick={()=>this.handleDeletePodcast(pod._id)}> X </button>
      </CardActions>

      </Card>
      )

    return (
        <React.Fragment>
        
        <Hero><h1>Podcasts</h1></Hero>

        <TabPanel>
        <Panel title="Podcasts" index="0">
        {this.state.podcasts.map(renderPodcast)}
        </Panel>
        <Panel title="Add New" index="1">
        <AddPodcast handleAddPodcast={this.handleAddPodcast} />
        </Panel>
        </TabPanel>

        </React.Fragment>
    );
  }
}

export default Podcasts;
