import React, { Component } from "react";
import ResultsList from "./ResultsList";
import MonsterFilters from "./MonsterFilters";
import { connect } from "react-redux";

class MonsterIndex extends Component {
	state = {
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
		let results = this.filterResults(this.props.monsters, this.state.filters);
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

const mapStateToProps = (state) => {
	return {
		monsters: state.monsters,
	};
};

export default connect(mapStateToProps)(MonsterIndex);
