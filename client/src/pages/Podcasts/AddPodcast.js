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
    const { name, link } = event.target;
    newState[name] = link;

    if( link && Util.checkStitchUrl( link)){
      newState.linkIsValid = true;
      this.handleScrape(link);
    } else {
      newState.linkIsValid = false;
      newState.tempPod = {};
    }

    this.setState(newState);
  }

  handleScrape = link =>{
    API.getSingleScrape(link)
    .then(scrape =>  this.setState({tempPod: scrape.data}));
  } 

  handleSubmit = data =>{
    API.getSingleScrape(this.state.link)
    .then(scrape =>  this.setState({tempPod: scrape.data}));
  }

  // **************************************************************/
  // Render

  render() {
    return (
        <Card>
        <CardBody>
        <h3>Add a Podcast</h3>
        <p>Is there a podcast from <a href="https://www.stitcher.com/stitcher-list/" target="_blank">Stitcher</a> that you want to add?</p>
        <label htmlFor="link">Stitcher Link:</label>
        <input 
        onChange={this.handleChange} 
        type="text" 
        name="link" 
        id="link"
         />

        <button className="btn" onClick={this.handleSubmit}>Add Podcast</button>
        </CardBody>
        <CardFooter>
        <a href={this.state.link} target="_blank" rel="noopener noreferrer">{this.state.link}</a>
        {this.state.tempPod ? 
          <p>{this.state.tempPod.podcast}</p> : 
          null}
        </CardFooter>
        </Card>
    );
  }
}

export default AddPodcast;
