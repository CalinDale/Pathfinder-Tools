import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({ tools }) => {
	const toolsList = tools.map((tool) => {
		return (
			<div className="ToolLink" key={tool.key}>
				<Link to={tool.link}>{tool.name}</Link>
			</div>
		);
	});
	return <nav className="MainMenu">{toolsList}</nav>;
};

export default MainMenu;
