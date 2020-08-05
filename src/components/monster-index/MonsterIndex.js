import React, { Component } from "react";
import Monsters from "../../data/Monsters";
import ResultsList from "./ResultsList";
import MonsterFilters from "./MonsterFilters";

class MonsterIndex extends Component {
	state = {
		monsters: Monsters,
		name: "",
	};
	updateFilters(value) {
		this.setState({ name: value });
	}
	render() {
		let results = this.state.monsters.filter((monster) => {
			return monster.name.indexOf(this.state.name) !== -1;
		});
		return (
			<div className="MonsterIndex">
				<h1>Monster Index</h1>
				<MonsterFilters onChange={this.updateFilters.bind(this)} />
				<ResultsList results={results} />
			</div>
		);
	}
}

export default MonsterIndex;
