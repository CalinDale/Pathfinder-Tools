import React, { Component } from "react";
import MonsterIndexList from "./MonsterIndexList";
import MonsterIndexFilters from "./filters/MonsterIndexFilters";
import { connect } from "react-redux";
import { updateFilteredMonsters } from "../../store/actions/filteredMonstersActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MonsterIndex extends Component {
	filterFunctions = {
		name: (monster, filters) => {
			console.log("currently filtering " + monster.name + " by name");
			let monsterName = monster.name.replace(/\s+/g, "").toLowerCase();
			let filterTerm = filters.name.value.replace(/\s+/g, "").toLowerCase();
			return monsterName.includes(filterTerm);
		},
	};

	onFiltersChange = (filters) => {
		console.log(filters);
		this.props.updateFilteredMonsters(
			this.filterMonsters(this.props.allMonsters, filters)
		);
	};

	onFiltersAdd = (filter) => {
		let filters = {};
		filters[filter.filterName] = filter;

		this.props.updateFilteredMonsters(
			this.filterMonsters(this.props.filteredMonsters, filters)
		);
	};

	createFilterFunctionsArray(filters) {
		let functions = [];
		Object.values(filters).forEach((filter) => {
			functions.push(this.filterFunctions[filter.filterName]);
		});
		return functions;
	}

	filterMonsters(monsters, filters) {
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
				<MonsterIndexFilters
					onFiltersChange={this.onFiltersChange}
					onFiltersAdd={this.onFiltersAdd}
				/>
				<MonsterIndexList />
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
