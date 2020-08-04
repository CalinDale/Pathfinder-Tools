import React, { Component } from "react";
import MainMenu from "./MainMenu";

class App extends Component {
	state = {
		tools: [
			{ name: "Monster Index", key: 0 },
			{ name: "Monster Builder", key: 1 },
			{ name: "Encounter Builder", key: 2 },
			{ name: "Encounter Table Builder", key: 3 },
			{ name: "Spell Index", key: 4 },
			{ name: "Weather Generator", key: 5 },
			{ name: "Treasure Planner", key: 6 },
			{ name: "Item Creation", key: 7 },
		],
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Pathfinder Tools</h1>
					<p>under construction</p>
				</header>
				<MainMenu tools={this.state.tools} />
			</div>
		);
	}
}

export default App;
