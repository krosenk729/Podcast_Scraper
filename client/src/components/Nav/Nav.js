import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeadphones from '@fortawesome/fontawesome-free-solid/faHeadphones';
import faSave from '@fortawesome/fontawesome-free-solid/faSave';
import faAssistiveListeningSystems from '@fortawesome/fontawesome-free-solid/faAssistiveListeningSystems';

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          <FontAwesomeIcon icon={faHeadphones} /><FontAwesomeIcon icon={faSave} /><FontAwesomeIcon icon={faAssistiveListeningSystems} />
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
