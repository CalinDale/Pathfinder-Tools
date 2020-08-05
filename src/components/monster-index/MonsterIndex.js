import React, { Component } from "react";
import Monsters from "../../data/Monsters";
import ResultsList from "./ResultsList";
import MonsterFilters from "./MonsterFilters";

class MonsterIndex extends Component {
	state = {
		monsters: Monsters,
		filters: { name: "", type: "" },
	};
	updateFilters(name, value) {
		let filters = this.state.filters;
		filters[name] = value;
		this.setState({ filters: filters });
		console.log(filters);
	}
	filterResults(monsters, filters) {
		return monsters.filter((monster) => {
			return (
				monster.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
				monster.type.toLowerCase().indexOf(filters.type.toLowerCase()) !== -1
			);
		});
	}
	render() {
		let results = this.filterResults(this.state.monsters, this.state.filters);
		return (
			<div className="MonsterIndex">
				<h1>Monster Index</h1>
				<MonsterFilters
					handleChange={this.updateFilters.bind(this)}
					filters={this.state.filters}
				/>
				<ResultsList results={results} />
			</div>
		);
	}
}

export default MonsterIndex;
