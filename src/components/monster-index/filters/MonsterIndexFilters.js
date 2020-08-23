import React, { Component } from "react";
import MonsterNameFilter from "./MonsterNameFilter";
import MonsterCRFilter from "./MonsterCRFilter";

class MonsterIndexFilters extends Component {
	state = {
		filters: {
			nameFilter: {
				filterName: "nameFilter",
				runFilter: (monster, filter) => {
					let monsterName = monster.name.replace(/\s+/g, "").toLowerCase();
					let filterTerm = filter.values.nameInput
						.replace(/\s+/g, "")
						.toLowerCase();
					return monsterName.includes(filterTerm);
				},
				checkInUse: (filter) => {
					return filter.values.nameInput !== "";
				},
				isInUse: function () {
					return this.values.nameInput !== "";
				},
				values: { nameInput: "" },
			},
			crFilter: {
				runFilter: (monster, filter) => {
					let monsterCR = this.crToFloat(monster.cr);
					let filterCR = this.crToFloat(filter.values.crValueInput);
					console.log(monster.cr, monsterCR, filterCR, monsterCR === filterCR);
					return monsterCR === filterCR;
				},
				filterName: "crFilter",
				isInUse: function () {
					return this.values.crValueInput !== "";
				},
				values: { crValueInput: "", crMinInput: "", crMaxInput: "" },
			},
		},
		inUseFilters: {},
	};

	crToFloat = (crString) => {
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

	updateInUseFilters(filter) {
		let inUseFilters = this.state.inUseFilters;
		if (filter.isInUse() === true) {
			inUseFilters[filter.filterName] = filter;
		} else {
			delete inUseFilters[filter.filterName];
		}
		this.setState({ inUseFilters });
	}

	updateFilter = (filterName, newValues) => {
		let filters = this.state.filters;
		filters[filterName].values = newValues;
		this.setState({ filters });
		this.updateInUseFilters(filters[filterName]);

		console.log(this.state.inUseFilters);

		this.props.onFiltersChange(this.state.inUseFilters);
	};

	render() {
		return (
			<form className="MonsterFilters">
				<h2>Monster Filters</h2>
				<MonsterNameFilter
					filter={this.state.filters.nameFilter}
					updateFilter={this.updateFilter}
				/>
				<MonsterCRFilter
					filter={this.state.filters.crFilter}
					updateFilter={this.updateFilter}
				/>
			</form>
		);
	}
}

export default MonsterIndexFilters;
