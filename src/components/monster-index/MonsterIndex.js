import React, { Component } from "react";
import MonsterList from "./MonsterList";
import MonsterFilters from "./MonsterFilters";
import { connect } from "react-redux";
import { updateFilteredMonsters } from "../../store/actions/filteredMonstersActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MonsterIndex extends Component {
	state = {
		filters: { name: "", type: "" },
	};

	filterFunctions = {
		name: (monster, filters) => {
			let monsterName = monster.name.replace(/\s+/g, "").toLowerCase();
			let filterTerm = filters.name.replace(/\s+/g, "").toLowerCase();
			return monsterName.includes(filterTerm);
		},
	};

	updateFilters(name, value) {
		let filters = this.state.filters;
		filters[name] = value;
		this.setState({ filters });
		this.props.updateFilteredMonsters(
			this.filterMonsters(this.props.allMonsters, filters)
		);
	}

	createFilterFunctionsArray(filters) {
		let functions = [];
		if (filters.name != "") functions.push(this.filterFunctions.name);
		return functions;
	}

	filterMonsters(monsters, filters) {
		//determine which filters are being used.
		//Do this beforehand so we're not re-checking which filters to use for every monster.
		let filterFunctions = this.createFilterFunctionsArray(filters);

		return monsters.filter((monster) => {
			let result = true;
			filterFunctions.forEach((filterFunction) => {
				result = result && filterFunction(monster, filters);
			});
			return result;
		});
	}
	render() {
		return (
			<div className="MonsterIndex">
				<h1>Monster Index</h1>
				<MonsterFilters
					handleChange={this.updateFilters.bind(this)}
					filters={this.state.filters}
				/>
				<MonsterList monsters={this.props.filteredMonsters} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const allMonsters = state.firestore.ordered.monsters
		? state.firestore.ordered.monsters
		: null;
	return {
		allMonsters: allMonsters,
		filteredMonsters: state.monsters.filtered,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateFilteredMonsters: (filteredMonsters) => {
			dispatch(updateFilteredMonsters(filteredMonsters));
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{ collection: "monsters" }])
)(MonsterIndex);
