import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const PodcastCard = (props) => (
  <div className="card horizontal">
  <div className="card-image">
  <img src={props.img} />
  </div>
  <div className="card-stacked">
  <div className="card-content">
  <span className="card-title grey-text text-darken-4">{props.episode}</span>
  <p>{props.podcast}</p>
  </div>
  <div className="card-action">
  <a href={props.link} target="_blank">Listen to Podcast</a>
  <Link to={"/podcast/" + props._id}>Add Notes</Link>
  <button onClick={()=> props.unsavePodcast(props._id)}>Remove Episode</button>
  </div>
  </div>
  </div>
);

PodcastCard.propTypes = {
  _id: PropTypes.string.isRequired,
  podcast: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  duration: PropTypes.string,
  img: PropTypes.string,

  unsavePodcast: PropTypes.func
};


export default PodcastCard;
