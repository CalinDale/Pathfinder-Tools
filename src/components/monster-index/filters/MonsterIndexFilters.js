import React, { Component } from "react";
import MonsterNameFilter from "./MonsterNameFilter";
import MonsterCRFilter from "./MonsterCRFilter";

class MonsterIndexFilters extends Component {
	state = {
		filters: {
			nameFilter: {
				filterName: "nameFilter",
				inUse: false,
				values: { nameInput: "" },
			},
			crFilter: {
				filterName: "crFilter",
				inUse: false,
				values: { crValueInput: "", crMinInput: "", crMaxInput: "" },
			},
		},
		inUseFilters: {},
	};

	updateInUseFilters(filter) {
		let inUseFilters = this.state.inUseFilters;
		if (filter.inUse === true) {
			inUseFilters[filter.filterName] = filter;
		} else {
			delete inUseFilters[filter.filterName];
		}
		this.setState({ inUseFilters });
	}

	/*updateFilterBeep(filter) {
		let filters = this.state.filters;
		let newInUse = this.filterIsInUse(filterName, newValues);
		filters[filter.filterName] = filter;
		filters[filter.filterName].inUse = newInUse;
		this.setState({ filters });
	}*/

	updateFilter = (filterName, newValues) => {
		let filters = this.state.filters;
		filters[filterName].values = newValues;
		let newInUse = this.filterIsInUse(filters[filterName]);
		filters[filterName].inUse = newInUse;
		console.log(this.state.filters);
		console.log(filters);
		this.setState({ filters });
		this.updateInUseFilters(filters[filterName]);

		this.props.onFiltersChange(this.state.inUseFilters);
	};

	filterIsInUse(filter) {
		switch (filter.filterName) {
			case "nameFilter":
				return filter.values.nameInput !== "";
			case "crFilter":
				return filter.values.crValueInput !== "";
			default:
				break;
		}
	}

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
