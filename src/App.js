import React, { Component } from "react";
import MainMenu from "./components/MainMenu";
import MonsterIndex from "./components/monster-index/MonsterIndex";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<h1>Pathfinder Tools</h1>
						<p>under construction</p>
					</header>
					<MainMenu />
					<Route path="/monster-index" component={MonsterIndex} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
