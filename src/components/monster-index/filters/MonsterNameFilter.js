import React, { Component } from "react";

class MonsterIndexNameFilter extends Component {
	updateFilter(event) {
		this.props.handleChange(event.target.name, event.target.value);
	}
	render() {
		return (
			<div id="nameFilterContainer">
				<label>Name:</label>
				<input
					id="nameFilter"
					name="name"
					type="text"
					value={this.value}
					onChange={this.updateFilter.bind(this)}
				/>
			</div>
		);
	}
}

export default MonsterIndexNameFilter;
