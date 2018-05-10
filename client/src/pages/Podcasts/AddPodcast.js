import React, { Component } from "react";
import {Card, CardBody} from "../../components/Card";
import Scrape from "../../utils/Scrape";
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
    // console.log(this.state.link);
    // let url = "http://anyorigin.com/go?url=" + encodeURIComponent(this.state.link) + "&callback=?";
    // this.props.handleAddPodcast
    // Scrape.getPodData(this.state.link).then(console.log);
    // console.log(url);
    API.getSingleScrape(this.state.link).then(console.log)
  }

  // **************************************************************/
  // Render

  render() {
    return (
        <Card>
        <CardBody>
        <h3>Add a Podcast</h3>
        <label htmlFor="link">Stitcher Link:</label>
        <input 
        onChange={this.handleChange} 
        type="text" 
        name="link" 
        id="link"
        value="https://www.stitcher.com/podcast/wnyc/freakonomics-radio"
         />

        <button className="btn" onClick={this.handleSubmit}>Add Podcast</button>
        <small>{this.state.link}</small>
        </CardBody>
        </Card>
    );
  }
}

export default AddPodcast;
