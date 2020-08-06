import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MainMenu extends Component {
	render() {
		const toolsList = this.props.tools.map((tool) => {
			return (
				<div className="ToolLink" key={tool.key}>
					<Link to={tool.link}>{tool.name}</Link>
				</div>
			);
		});
		return <nav className="MainMenu">{toolsList}</nav>;
	}
}

const mapStateToProps = (state) => {
	return {
		tools: state.tools,
	};
};

export default connect(mapStateToProps)(MainMenu);
