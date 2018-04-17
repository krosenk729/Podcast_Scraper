import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Episode extends Component {
  state = {
    podcast: {}
  };

  // **************************************************************/
  // Load Data on Component Mount  
  componentDidMount() {
    API.getSingleEpisode(this.props.match.params.id)
      .then(res => this.setState({ podcast: res.data }))
      .catch(err => console.log(err));
  }

  // **************************************************************/
  // If episode is from stitcher (has pid and eid), show embed code
  renderEmbedPlayer = () => {
    if(this.state.podcast && this.state.podcast.pid && this.state.podcast.eid){
      const iframeSource = `https://app.stitcher.com/splayer/f/${this.state.podcast.pid}/${this.state.podcast.eid}`
      return (
        <iframe src={iframeSource} title={this.state.podcast.episode} frameborder="0" scrolling="no"></iframe>
        )
      }
    }

  // **************************************************************/
  // Render

  render() {
    return (
        <React.Fragment>
          <div className="hero-split">
          <div>
           <h1>{this.state.podcast.episode}</h1>
          <h3>{this.state.podcast.podcast}</h3>
          </div>
          <div className="img-wrapper">
          <img src={this.state.podcast.img || "/placeholder.png"} />
          </div>
          </div>
          <main className="main episode">
          {this.renderEmbedPlayer()}
          <br />
          <div className="actions">
          <a href={this.state.podcast.link} target="_blank">Listen on Stitcher</a>
          <Link to="/">Back to All Podcasts</Link>
          </div>
          </main>
        </React.Fragment>
    );
  }
}

export default Episode;
