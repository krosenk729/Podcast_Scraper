import React, { Component } from "react";
import {Card, CardBody} from "../../components/Card";
import Scrape from "../../utils/Scrape";

class AddPodcast extends Component {
  state = {
    link: ""
  };

  // **************************************************************/
  // Add and Delete Podcasts

  resetForm = () => {
    this.setState({link: "https://www.stitcher.com/podcast/"});
  }

  handleChange = event =>{
    console.log(event);

    const { name, value } = event.target;
    console.log(name, value);
    this.setState({[name]: value});


  }

  handleSubmit = data =>{
    // this.props.handleAddPodcast
  }

  // **************************************************************/
  // Render

  render() {
    return (
        <Card>
        <CardBody>
        <h3>Add a Podcast</h3>

        <label htmlFor="link">Stitcher Link:</label>
        <input onChange={this.handleChange} type="text" name="link" id="link" />

        <button className="btn" onClick={this.handleSubmit}>Add Podcast</button>
        <small>{this.state.link}</small>
        </CardBody>
        </Card>
    );
  }
}

export default AddPodcast;
