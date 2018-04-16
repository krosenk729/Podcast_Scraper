import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';

const PodcastList = (props) => (
    <li className='collection-item avatar'>
      {/* to be wrapped in a ul class of collection */}
      <img src={props.img || '/placeholder.png'} alt={props.podcast} className='circle' />
      <span className='title'>{props.episode}</span>
      <p>{props.podcast}</p>
      <br />
      <div className='secondary-content'>
      <button onClick={() => props.unsavePodcast(props._id)}>
      <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <Link to={'/podcast/' + props._id}>
      <FontAwesomeIcon icon={faChevronRight} />
      </Link>
      </div>
    </li>
);

PodcastList.propTypes = {
  _id: PropTypes.string.isRequired,
  podcast: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  duration: PropTypes.string,
  img: PropTypes.string,

  unsavePodcast: PropTypes.func
};


export default PodcastList;
