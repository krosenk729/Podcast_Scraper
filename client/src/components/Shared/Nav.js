import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faHeadphones from "@fortawesome/fontawesome-free-solid/faHeadphones";

const Nav = () => (
  <nav>
  <div className="nav-brand">
  <a href="/" className="brand-logo"><FontAwesomeIcon icon={faHeadphones} /></a>
  </div>
	<ul className="nav-bar">
	<li><a href="/#scrapes">New Episodes</a></li>
	<li><a href="/#saved">Saved Episodes</a></li>
	<li><a href="/#add">Add New</a></li>
	</ul>
  </nav>
);

export default Nav;
