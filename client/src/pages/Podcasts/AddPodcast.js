import React, { Component } from "react";
import {Card, CardBody} from "../../components/Card";
import API from "../../utils/API";

class AddPodcast extends Component {
  state = {
    link: "https://www.stitcher.com/podcast/wnyc/freakonomics-radio"
  };

  // **************************************************************/
  // Add and Delete Podcasts

  resetForm = () => {
    this.setState({link: "https://www.stitcher.com/podcast/"});
  }

  handleChange = event =>{
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = data =>{
    API.getSingleScrape(this.state.link).then(console.log)
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
        </Card>
    );
  }
}

export default AddPodcast;
