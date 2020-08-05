import React, { Component } from "react";
import MainMenu from "./components/MainMenu";
import MonsterIndex from "./components/monster-index/MonsterIndex";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	state = {
		tools: [
			{ name: "Monster Index", link: "/monster-index", key: 0 },
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
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<h1>Pathfinder Tools</h1>
						<p>under construction</p>
					</header>
					<MainMenu tools={this.state.tools} />
					<Route path="/monster-index" component={MonsterIndex} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
