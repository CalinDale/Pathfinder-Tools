import React from "react";

const MainMenu = ({ tools }) => {
	const toolsList = tools.map((tool) => {
		return (
			<div className="ToolLink" key={tool.key}>
				<div>{tool.name}</div>
			</div>
		);
	});
	return <div className="MainMenu">{toolsList}</div>;
};

export default MainMenu;
