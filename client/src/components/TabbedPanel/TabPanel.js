import React from "react";
import PropTypes from "prop-types"; 
import "./Panel.css";

export const TabPanel = ({ children }) => {
  return (
    <div className="tab-panel">
        {children}
    </div>
  );
};

Panel.TabPanel = {
	children: PropTypes.element.isRequired
}