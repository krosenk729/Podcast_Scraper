import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Episode extends Component {
  state = {
    podcast: {}
  };
  // When this component mounts, grab the podcast with the _id of this.props.match.params.id
  componentDidMount() {
    API.getPodcast(this.props.match.params.id)
      .then(res => this.setState({ podcast: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
            <Link to="/">Back to All Podcasts</Link>
    );
  }
}

export default Episode;
