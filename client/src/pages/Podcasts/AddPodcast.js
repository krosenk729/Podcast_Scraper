import React, { Component } from "react";
import {Card, CardBody} from "../../components/Card";

class AddPodcast extends Component {
  state = {
    link: ""
  };

  // **************************************************************/
  // Add and Delete Podcasts

  resetForm = () => {
    this.setState({link: "https://www.stitcher.com/podcast/"});
  }

  handleChange = data =>{
    
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

        <input onChange={this.handleChange} type="text" name="link" id="link" />
        <label htmlFor="link">Stitcher Link:</label>

        <button className="btn" onClick={this.handleSubmit}>Add Podcast</button>

        </CardBody>
        </Card>
    );
  }
}

export default AddPodcast;
