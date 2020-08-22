import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilteredMonsters } from "../../../store/actions/filteredMonstersActions";
import MonsterNameFilter from "./MonsterNameFilter";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MonsterIndexFilters extends Component {
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

	updateFilter = (name, value) => {
		let filters = this.state.filters;
		filters[name] = value;
		this.setState({ filters });
		this.props.updateFilteredMonsters(
			this.filterMonsters(this.props.allMonsters, filters)
		);
	};

	createFilterFunctionsArray(filters) {
		let functions = [];
		if (filters.name !== "") functions.push(this.filterFunctions.name);
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
			<form className="MonsterFilters">
				<h2>Monster Filters</h2>
				<MonsterNameFilter
					value={this.state.filters.name}
					updateFilter={this.updateFilter}
				/>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	const allMonsters = state.firestore.ordered.monsters
		? state.firestore.ordered.monsters
		: null;
	return {
		allMonsters: allMonsters,
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
)(MonsterIndexFilters);
