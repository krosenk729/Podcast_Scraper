import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeadphones from '@fortawesome/fontawesome-free-solid/faHeadphones';

const Nav = () => (
  <nav>
  <div class="nav-wrapper">
  <a href="/" class="brand-logo"><FontAwesomeIcon icon={faHeadphones} /></a>
  </div>
  </nav>
);

export default Nav;
