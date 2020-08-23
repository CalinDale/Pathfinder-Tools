import React, { Component } from "react";
import MonsterIndexList from "./MonsterIndexList";
import MonsterIndexFilters from "./filters/MonsterIndexFilters";
import { connect } from "react-redux";
import { updateFilteredMonsters } from "../../store/actions/filteredMonstersActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MonsterIndex extends Component {
	filterFunctions = {
		nameFilter: (monster, filters) => {
			let monsterName = monster.name.replace(/\s+/g, "").toLowerCase();
			let filterTerm = filters.nameFilter.values.nameInput
				.replace(/\s+/g, "")
				.toLowerCase();
			return monsterName.includes(filterTerm);
		},
		crFilter: (monster, filters) => {
			let crToFloat = (crString) => {
				//Only approx, don't need to be precise
				switch (crString) {
					case "1/2":
						return 0.5;
					case "1/3":
						return 0.3;
					case "1/4":
						return 0.25;
					case "1/5":
						return 0.2;
					case "1/6":
						return 0.15;
					case "1/7":
						return 0.14;
					case "1/8":
						return 0.12;
					case "1/9":
						return 0.11;
					case "1/10":
						return 0.1;
					default:
						return parseInt(crString);
				}
			};

			let monsterCR = crToFloat(monster.cr);
			let filterCR = crToFloat(filters.crFilter.values.crValueInput);
			console.log(monster.cr, monsterCR, filterCR, monsterCR === filterCR);
			return monsterCR === filterCR;
		},
	};

	onFiltersChange = (filters) => {
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
