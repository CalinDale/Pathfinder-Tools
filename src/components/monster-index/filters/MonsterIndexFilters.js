import React, { Component } from "react";
import MonsterNameFilter from "./MonsterNameFilter";

class MonsterIndexFilters extends Component {
	state = {
		filters: { name: { filterName: "name", value: "", inUse: false } },
		inUseFilters: {},
	};

	updateFilter = (name, value) => {
		let filters = this.state.filters;
		filters[name].value = value;

		let oldInUse = this.state.filters[name].inUse;
		filters[name].inUse = this.filterIsInUse(name, value);

		let inUseFilters = this.state.inUseFilters;

		if (filters[name].inUse === true) {
			inUseFilters[name] = filters[name];
		} else if (filters[name].inUse === false) {
			delete this.state.inUseFilters[name];
		}
		this.setState({ filters, inUseFilters });

		if (oldInUse === false && filters[name].inUse === true) {
			this.props.onFiltersAdd(filters[name]);
		} else if (oldInUse === false && filters[name.inUse === false]) {
			//Do nothing
		} else {
			this.props.onFiltersChange(inUseFilters);
		}
	};

	filterIsInUse(name, value) {
		switch (name) {
			case "name":
				return value !== "";
			default:
				break;
		}
	}

	render() {
		return (
			<form className="MonsterFilters">
				<h2>Monster Filters</h2>
				<MonsterNameFilter
					value={this.state.filters.name.value}
					updateFilter={this.updateFilter}
				/>
			</form>
		);
	}
}

export default MonsterIndexFilters;
