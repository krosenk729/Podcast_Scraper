import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import AddPodcast from './AddPodcast';
import ListCard from './ListCard';

class Podcast extends Component {
  state = {
    podcasts: [],
    scrapes: [],
    viewing: 'all'
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
    let saved = this.state.scrapes.filter(i => i._id == index);
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
  render(){
    return (
      <React.Fragment>
      <div>
      {/* filter between saved / unsaved / all */}
      </div>

      <div>
      {/* render list of podcasts */}
      <h2>Episodes</h2>
      {this.state.scrapes.map( scrape => (
        <ListCard
        key={scrape._id}
        {...scrape}
        isSaved={'false'}
        savePodcast={this.savePodcast}
        />
        ))}
      </div>

      <div>
      {/* render list of podcasts */}
      <h2>Saved Episodes</h2>
      {this.state.podcasts.map( podcast => (
        <ListCard
        key={podcast._id}
        {...podcast}
        isSaved={'true'}
        unsavePodcast={this.unsavePodcast}
        />
        ))}
      </div>

      <div>
        <h2>Manually Add Your Own Episode</h2>
        <AddPodcast 
        manuallyAdd={this.handleManualSave} 
        />
      </div>

      </React.Fragment>
    );
  }
}

export default Podcast;
