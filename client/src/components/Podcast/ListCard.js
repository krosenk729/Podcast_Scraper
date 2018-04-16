import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const ListCard = (props) => (
  <div class="card horizontal">
    <div class="card-image">
      <img src={props.img} />
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title grey-text text-darken-4">{props.episode}</span>
        <p>{props.podcast}</p>
      </div>
      <div class="card-action">
        <a href={props.link} target="_blank">Listen to Podcast</a>
        {props.isSaved ? <Link to={"/podcast/" + props._id}>Add Notes</Link>  : ''}
        {props.isSaved ? <button onClick={()=> props.unsavePodcast(props._id)}>Remove Episode</button>  : <button onClick={()=> props.savePodcast(props._id)}>Save Episode</button>}
      </div>
    </div>
  </div>
);

ListCard.propTypes = {
  _id: PropTypes.string.isRequired,
  podcast: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  duration: PropTypes.string,
  img: PropTypes.string,
  
  isSaved: PropTypes.bool,

  unsavePodcast: PropTypes.func,
  savePodcast: PropTypes.func
};


export default ListCard;
