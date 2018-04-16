import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Episode extends Component {
  state = {
    podcast: {}
  };
  // When this component mounts, grab the podcast with the _id of this.props.match.params.id
  componentDidMount() {
    API.getSinglePodcast(this.props.match.params.id)
      .then(res => this.setState({ podcast: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <React.Fragment>
            {this.state.podcast.episode}
            <Link to="/">Back to All Podcasts</Link>
        </React.Fragment>
    );
  }
}

export default Episode;
