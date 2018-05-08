import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Hero } from "../../components/Hero";
import {TabPanel, Panel} from "../../components/TabbedPanel";
import {Card, CardBody, CardActions, CardImg} from "../../components/Card";

class Episode extends Component {
  state = {
    scrapes: [],
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
    .then(data => data.map(this.checkScrapesForPod))
    .then(data => this.setState({ scrapes: data }))
    .catch(err => console.log(err));
  };

  // **************************************************************/
  // Check if Scrape Exists

  checkScrapesForPod = scrape =>{
      scrape.isSaved = this.state.saves.some(saved => saved.link === scrape.link);
      return scrape;
  }

  // **************************************************************/
  // Handle Saving and Unsaving an Epsiode

  handleSaveEpisode = scrape => {
    scrape.isSaved = true;

    this.setState({scrapes: this.state.scrapes.map(scrape => scrape)})

    API.saveEpisode(scrape)
      .then(res => this.setState({saves: [...this.state.saves, scrape]}))
      .catch(err => console.log(err));
  }

  handleUnsaveEpisode = index => {
    API.deleteEpisode(index)
    .then(res => this.setState({ saves: this.state.saves.filter(save => save._id !== index) }))
    .catch(err => console.log(err));
  }

  // **************************************************************/
  // Render

  render() {
    const renderScrape = pod => (
      <Card key={pod.eid}>
      
      <CardImg img={pod.img} />

      <CardBody>
      <h3>{pod.episode}</h3>
      <a href={pod.link} target="_blank">{pod.podcast}</a>
      </CardBody>

      <CardActions>
      {pod.isSaved ? 
      <button className="btn" disabled> Saved </button> :
      <button className="btn" onClick={()=>this.handleSaveEpisode(pod)}> Save </button> 
      }
      </CardActions>

      </Card>
      )

    const renderSave = pod => (
      <Card key={pod._id}>
      
      <CardImg img={pod.img} />

      <CardBody>
      <h3>{pod.episode}</h3>

      </CardBody>

      <CardActions>
      <button className="btn" onClick={()=>this.handleDeletePodcast(pod._id)}> X </button>
      </CardActions>

      </Card>
      )

    return (
        <React.Fragment>

        <Hero><h1>Episodes</h1></Hero>

        <TabPanel>
        <Panel title="New Episodes" index="0">
        {this.state.scrapes.map(renderScrape)}
        </Panel>
        <Panel title="Saved Episodes" index="1">
        {this.state.saves.map(renderSave)}
        </Panel>
        </TabPanel>
        </React.Fragment>
    );
  }
}

export default Episode;
