import React, { Component } from "react";
import {Card, CardBody, CardFooter} from "../../components/Card";
import API from "../../utils/API";
import * as Util from "../../utils/Util";

class AddPodcast extends Component {
  state = {
    link: "",
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
    this.setState({link: "https://www.stitcher.com/podcast/"});
  }

  handleChange = event =>{
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({[name]: value});
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
        <small>{this.state.link}</small>
        </CardBody>
        <CardFooter>
        <a href={this.state.link} target="_blank" rel="noopener noreferrer">{this.state.link}</a>
        {this.state.tempPod ? <p>{this.state.tempPod.podcast}</p> : null}
        </CardFooter>
        </Card>
    );
  }
}

export default AddPodcast;
