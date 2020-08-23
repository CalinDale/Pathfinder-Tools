import React, { Component } from "react";

class MonsterIndexCRFilter extends Component {
	state = {
		byValue: true,
	};
	handleChange(event) {
		let filterName = event.target.getAttribute("data-filterName");
		let values = {};
		values[event.target.id] = event.target.value;

		this.props.updateFilter(filterName, values);
	}
	render() {
		const byValue = this.state.byValue;
		let crInput;

		if (byValue) {
			crInput = (
				<div id="crFilterByValueContainer">
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
		} else {
			crInput = <div></div>;
		}

		return (
			<div id="crFilterContainer">
				<label>CR:</label>
				{crInput}
			</div>
		);
	}
}

export default MonsterIndexCRFilter;
