import React, { Component } from "react";
import MainMenu from "./components/MainMenu";
import MonsterIndex from "./components/monster-index/MonsterIndex";
import MonsterDetails from "./components/monster-index/monster-details/MonsterDetails";
import { BrowserRouter, Route } from "react-router-dom";
import Initializer from "./components/Initializer";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<h1>Pathfinder Tools</h1>
						<p>under construction</p>
					</header>
					<Initializer />
					<MainMenu />
					<Route path="/monsters" component={MonsterIndex} />
					<Route path="/monsters/:monster_id" component={MonsterDetails} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
