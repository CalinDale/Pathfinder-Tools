import React, { Component } from "react";
import { Link } from "react-router-dom";
import UploadMonstersButton from "./UploadMonstersButton";

class MainMenu extends Component {
	state = {
		tools: [
			{ name: "Monster Index", link: "/monsters", key: 0 },
			{ name: "Monster Builder", link: "/", key: 1 },
			{ name: "Encounter Builder", link: "/", key: 2 },
			{ name: "Encounter Table Builder", link: "/", key: 3 },
			{ name: "Spell Index", link: "/", key: 4 },
			{ name: "Weather Generator", link: "/", key: 5 },
			{ name: "Treasure Planner", link: "/", key: 6 },
			{ name: "Item Creation", link: "/", key: 7 },
			{ name: "Feats Index", link: "/", key: 8 },
		],
	};
	render() {
		const toolsList = this.state.tools.map((tool) => {
			return (
				<div className="ToolLink" key={tool.key}>
					<Link to={tool.link}>{tool.name}</Link>
				</div>
			);
		});
		return (
			<nav className="MainMenu">
				{toolsList}
				<UploadMonstersButton />
			</nav>
		);
	}
}

export default MainMenu;
