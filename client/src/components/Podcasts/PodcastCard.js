import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSave from "@fortawesome/fontawesome-free-solid/faSave";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import faChevronRight from "@fortawesome/fontawesome-free-solid/faChevronRight";

class PodcastCard extends Component {
  static propTypes = {
    type: PropTypes.oneOf(["scrape", "saved"]),
    _id: PropTypes.string,
    pid: PropTypes.string,
    eid: PropTypes.string,
    podcast: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    duration: PropTypes.string,
    img: PropTypes.string,

    savePodcast: PropTypes.func,
    unsavePodcast: PropTypes.func
  }

  // **************************************************************/
  // Handle Navigation
  
  saveThenNavigate = eid => {
    this.props.savePodcast(eid)
    .then(() => this.navigate())
  }

  navigate = eid => {
    this.props.history.push("/podcast/" + eid);
  }

  // **************************************************************/
  // Render

  render(){
    const subAction = this.props.type === "scrape" ? (
      <button onClick={() => this.props.savePodcast(this.props.eid)}>
      <FontAwesomeIcon icon={faSave} />
      </button>
      ) : (
      <button onClick={() => this.props.unsavePodcast(this.props._id)}>
      <FontAwesomeIcon icon={faTimes} />
      </button>
      );

      const mainAction = this.props.type === "scrape" ? (
        <button onClick={() => this.saveThenNavigate(this.props.eid)} >
        <FontAwesomeIcon icon={faChevronRight} />
        </button>
        ) : (
        <button onClick={() => this.navigate(this.props.eid)} >
        <FontAwesomeIcon icon={faChevronRight} />
        </button>
        );

    return (
      <div className="card">
      <div className="card-image">
        <img src={this.props.img || "/placeholder.png"} />
      </div>
      <div className="card-content">
        <h4>{this.props.episode}</h4>
        <p>{this.props.podcast}</p>
      </div>
      <div className="card-action sub-action">
        {subAction}
      </div>
      <div className="card-action main-action">
        {mainAction}
      </div>
      </div>
      );
  }
}

export default PodcastCard;
