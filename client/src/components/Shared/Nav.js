import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeadphones from '@fortawesome/fontawesome-free-solid/faHeadphones';

const Nav = () => (
  <nav>
  <div className="nav-wrapper">
  <a href="/" className="brand-logo"><FontAwesomeIcon icon={faHeadphones} /></a>
	<ul id="nav-mobile" className="right hide-on-med-and-down">
	<li><a href="/">New Episodes</a></li>
	<li><a href="/podcast">Saved Episodes</a></li>
	</ul>
  </div>
  </nav>
);

export default Nav;
