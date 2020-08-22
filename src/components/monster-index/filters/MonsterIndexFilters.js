import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilteredMonsters } from "../../../store/actions/filteredMonstersActions";
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

	updateFilters(event) {
		let filters = this.state.filters;
		filters[event.target.name] = event.target.value;
		this.setState({ filters });
		this.props.updateFilteredMonsters(
			this.filterMonsters(this.props.allMonsters, filters)
		);
	}

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
				<div>
					<label>Name:</label>
					<input
						name="name"
						type="text"
						value={this.state.filters.name}
						onChange={this.updateFilters.bind(this)}
					/>
				</div>
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
)(MonsterIndexFilters);
