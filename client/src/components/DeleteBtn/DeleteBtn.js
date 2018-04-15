import React from "react";
import "./DeleteBtn.css";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    <FontAwesomeIcon icon={faTimes} />
  </span>
);

export default DeleteBtn;
