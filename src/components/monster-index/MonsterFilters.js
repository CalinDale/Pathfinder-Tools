import React, { Component } from "react";

class MonsterFilters extends Component {
	state = {
		name: "",
	};
	updateName(event) {
		this.setState({ name: event.target.value });
		this.props.onChange(event.target.value);
	}
	render() {
		return (
			<div className="MonsterFilters">
				<h2>Monster Filters</h2>
				<input
					type="text"
					value={this.state.name}
					onChange={this.updateName.bind(this)}
				/>
			</div>
		);
	}
}

export default MonsterFilters;
