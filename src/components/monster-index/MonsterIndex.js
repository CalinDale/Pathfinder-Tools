import React, { Component } from "react";
import MonsterList from "./MonsterList";
import MonsterFilters from "./MonsterFilters";
import { connect } from "react-redux";
import { updateFilteredMonsters } from "../../actions/filteredMonstersActions";

class MonsterIndex extends Component {
	state = {
		filters: { name: "", type: "" },
	};
	updateFilters(name, value) {
		let filters = this.state.filters;
		filters[name] = value;
		this.setState({ filters });
		this.props.updateFilteredMonsters(
			this.filterMonsters(this.props.monsters, filters)
		);
	}
	filterMonsters(monsters, filters) {
		return monsters.filter((monster) => {
			return (
				monster.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
				monster.type.toLowerCase().indexOf(filters.type.toLowerCase()) !== -1
			);
		});
	}
	render() {
		return (
			<div className="MonsterIndex">
				<h1>Monster Index</h1>
				<MonsterFilters
					handleChange={this.updateFilters.bind(this)}
					filters={this.state.filters}
				/>
				<MonsterList monsters={this.props.filteredMonsters} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		monsters: state.monsters,
		filteredMonsters: state.filteredMonsters,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateFilteredMonsters: (filteredMonsters) => {
			dispatch(updateFilteredMonsters(filteredMonsters));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MonsterIndex);
