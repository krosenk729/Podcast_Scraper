import React from "react";
import PropTypes from "prop-types"; 
import "./Panel.css";

export const TabPanel = props => (
    <div className="tab-panel">
        {props.children}
    </div>
);

TabPanel.PropTypes = {
	children: PropTypes.element.isRequired
}