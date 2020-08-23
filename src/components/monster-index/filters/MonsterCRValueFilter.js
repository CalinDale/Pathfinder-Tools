import React, { Component } from "react";

class MonsterIndexCRValueFilter extends Component {
	handleChange(event) {
		let filterName = event.target.getAttribute("data-filterName");
		let values = {};
		values[event.target.id] = event.target.value;

		this.props.updateFilter(filterName, values);
	}

	validation(event) {
		//field is only allowed to contain numbers or '/'
	}

	render() {
		return (
			<div id="crValueFilterContainer">
				<button id="crInputModeButton">By Value</button>
				<input
					id="crValueInput"
					data-filtername={this.props.filter.filterName}
					name="crValue"
					type="text"
					value={this.props.filter.values.crValueInput}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		);
	}
}

export default MonsterIndexCRValueFilter;
