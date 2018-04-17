import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import AddPodcast from "./AddPodcast";
import PodcastCard from "./PodcastCard";

class Podcasts extends Component {
  state = {
    podcasts: [],
    scrapes: [],
    viewing: "all"
  };

// **************************************************************/
// Load Data on Component Mount  

  componentDidMount() {
    this.loadPodcasts();
    this.loadScrapes();
  }

  comonentDidUpdate(){
    this.loadScrapes();
  }

  // load saved podcasts from endpoint
  loadPodcasts = () => {
    API.getPodcasts()
      .then(res => this.setState({ podcasts: res.data }) )
      .catch(err => console.log(err));
  };

  // load new podcasts from endpoint 
  loadScrapes = () => {
    API.getScrapes()
      .then(res => res.data.sort( (a,b) => Math.random() > .5 ) )
      .then(data => data.filter(scrape => this.state.podcasts.every(saved => saved.link !== scrape.link) ))
      .then(data => this.setState({ scrapes: data }))
      .catch(err => console.log(err));
  };


// **************************************************************/
// Save Scrapes & Save Manual Adds

  handleManualSave = podcast => {
      API.savePodcast(podcast)
      .then(res => this.loadPodcasts())
      .catch(err => console.log(err));
  };

  handleScrapeSave = index => {
    let saved = this.state.scrapes.filter(i => i.eid == index);
    API.savePodcast(saved)
      .then(res => this.loadPodcasts())
      .catch(err => console.log(err));
  };

// **************************************************************/
// Remove Saves

  unsavePodcast = index => {
    API.deletePodcast(index)
      .then(res => this.loadPodcast())
      .catch(err => console.log(err));
  };

// **************************************************************/
// Render

  render() {
    return (
      <React.Fragment>
      <article className="container" id="scrapes">
      <h1>New Episodes</h1>
      {this.state.scrapes.map(episode => (
        <PodcastCard
        key={episode.eid}
        type="scrape"
        {...episode}
        savePodcast={this.handleScrapeSave}
        />
        ))}
      </article>

      <article className="container" id="saved">
      <h1>Saved Episodes</h1>
      {this.state.podcasts.map(episode => (
        <PodcastCard
        key={episode._id}
        type="saved"
        {...episode}
        unsavePodcast={this.unsavePodcast}
        />
        ))}
      </article>

      <article className="container" id="add">
      <h1>Add an Episode</h1>
      <p>Want to save an episode not on the list? We will allow it but you have to do the typing</p>
      <AddPodcast manuallyAdd={this.handleManualSave} />
      </article>

      </React.Fragment>
    );
  }
}

export default Podcasts;
