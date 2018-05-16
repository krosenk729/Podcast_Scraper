import React, { Component } from "react";
import {Card, CardBody, CardFooter} from "../../components/Card";
import API from "../../utils/API";
import * as Util from "../../utils/Util";

class AddPodcast extends Component {
  state = {
    link: "",
    linkIsValid: false,
    tempPod: {
      about: "",
      img: "",
      link: "",
      pid: "",
      podcast: ""
    }
  };

  // **************************************************************/
  // Add and Delete Podcasts

  resetForm = () => {
    this.setState({link: "", linkIsValid: false});
  }

  handleChange = event =>{
    const newState = {};
    const { name, value } = event.target;
    newState[name] = value;

    if( value && Util.checkStitchUrl( value)){
      newState.linkIsValid = true;
      this.handleScrape(value);
    } else {
      newState.linkIsValid = false;
      newState.tempPod = {};
    }
    console.log('newState', newState);
    this.setState(newState);
  }

  handleScrape = link =>{
    API.getSingleScrape(link)
    .then(scrape =>  this.setState({tempPod: scrape.data}));
  } 

  handleSubmit = data =>{
    // API.getSingleScrape(this.state.link)
    // .then(scrape =>  this.setState({tempPod: scrape.data}));
  }

  // **************************************************************/
  // Render

  render() {
    const renderTempPod = () => {
      if(this.state.linkIsValid && this.state.tempPod){
        return (
          <React.Fragment>
          <h2>{this.state.tempPod.podcast}</h2>
          <a href={this.state.link} target="_blank" rel="noopener noreferrer">{this.state.link}</a>
          </React.Fragment>
          )
      } else {
        return (
           <a href="https://www.stitcher.com/stitcher-list/" target="_blank" rel="noopener noreferrer">Find a new Podcast from Stitcher</a>
          )
      }
    }

    return (
        <Card>
        <CardBody>
        <h3>Add a Podcast</h3>
        <p>Is there a podcast from <a href="https://www.stitcher.com/stitcher-list/" target="_blank" rel="noopener noreferrer">Stitcher</a> that you want to add?</p>
        <label htmlFor="link">Stitcher Link:</label>
        <input 
        onChange={this.handleChange} 
        type="text" 
        name="link" 
        id="link"
         />

        <button className="btn" onClick={this.handleSubmit}>Add Podcast</button>
        </CardBody>
        <CardFooter>{renderTempPod()}</CardFooter>
        </Card>
    );
  }
}

export default AddPodcast;
