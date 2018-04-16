import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

const NoMatch = () => (
  <div className="container">
        <h1>404 : Not Found</h1>
        <Link to={'/'}>
        	Find your way back <FontAwesomeIcon icon={faHome} /> ...
        </Link>
  </div>
);

export default NoMatch;
