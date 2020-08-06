import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/filterActions";

class MonsterFilters extends Component {
	handleChange(event) {
		this.props.updateFilter(event.target.name, event.target.value);
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
						onChange={this.handleChange.bind(this)}
					/>
				</label>
				<label>
					Type:
					<select name="type" onChange={this.handleChange.bind(this)}>
						<option value="">Select</option>
						<option>Undead</option>
						<option>Ooze</option>
					</select>
				</label>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateFilter: (name, value) => {
			dispatch(updateFilter(name, value));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MonsterFilters);
