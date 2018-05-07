import React, { Component } from "react";
import PropTypes from "prop-types"; 
import "./Panel.css";

class Panel extends Component {
	static PropTypes = {
		tabs: PropTypes.arrayOf(PropTypes.shape({
			tab: PropTypes.string,
			contents: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
		}))
	}

  // **************************************************************/
  // Each Tab Container 

	renderTab = (tab, index) => (
		<React.Fragment>
		<label htmlFor={"tab-" + index} tabIndex="0"></label>
		<input id={"tab-" + index} type="radio" name="tabs" aria-hidden="true" />
		<h3>{tab.tab}</h3>
		<div>
		{tab.contents}
		</div>
		</React.Fragment>
		)

  // **************************************************************/
  // Render Tabs Together in a Panel

	render(){
		return(
			<div className="tab-panel">
			{this.props.tabs.map(renderTab)}
			<div>
			)
	}
}

export default Panel;
