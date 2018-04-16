import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import AddSaved from './AddSaved';
import PodcastCard from '../Shared/PodcastCard';

class Saved extends Component {
  state = {
    podcasts: [],
    scrapes: [],
    viewing: 'all'
  };

// **************************************************************/
// Load Data on Component Mount  

  componentDidMount() {
    this.loadPodcasts();
  }

  comonentDidUpdate(){
    this.loadPodcasts();
  }

  // load saved podcasts from endpoint
  loadPodcasts = () => {
    API.getPodcasts()
      .then(res => this.setState({ podcasts: res.data }) )
      .catch(err => console.log(err));
  };

// **************************************************************/
// Save Scrapes & Save Manual Adds

  handleManualSave = podcast => {
      API.savePodcast(podcast)
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

      <div className='row'>
      {/* render list of podcasts */}
      <h2>Saved Episodes</h2>
      {this.state.podcasts.map( podcast => (
        <PodcastCard
        key={podcast._id}
        {...podcast}
        unsavePodcast={this.unsavePodcast}
        />
        ))}
      </div>

      <div>
        <h2>Manually Add Your Own Episode</h2>
        <AddSaved 
        manuallyAdd={this.handleManualSave} 
        />
      </div>

      </React.Fragment>
    );
  }
}

export default Saved;
