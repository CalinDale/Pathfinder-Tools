import React, { Component } from "react";

class MonsterFilters extends Component {
	updateFilter(event) {
		this.props.handleChange(event.target.name, event.target.value);
	}
	render() {
		return (
			<form className="MonsterFilters">
				<h2>Monster Filters</h2>
				<label>
					Name:
					<input
						name="name"
						type="text"
						value={this.props.filters.name}
						onChange={this.updateFilter.bind(this)}
					/>
				</label>
				<label>
					Type:
					<select name="type" onChange={this.updateFilter.bind(this)}>
						<option value="">Select</option>
						<option>Undead</option>
						<option>Ooze</option>
					</select>
				</label>
			</form>
		);
	}
}

export default MonsterFilters;
