import React, { Component } from "react";
import MonsterIndexList from "./MonsterIndexList";
import MonsterIndexFilters from "./filters/MonsterIndexFilters";
import { connect } from "react-redux";
import { updateFilteredMonsters } from "../../store/actions/filteredMonstersActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MonsterIndex extends Component {
	onFiltersChange = (filters) => {
		this.props.updateFilteredMonsters(
			this.filterMonsters(this.props.allMonsters, filters)
		);
	};

	filterMonsters(monsters, filters) {
		return monsters.filter((monster) => {
			let result = true;
			Object.values(filters).forEach((filter) => {
				result = result && filter.runFilter(monster, filter);
			});
			return result;
		});
	}

	render() {
		return (
			<div className="MonsterIndex">
				<h1>Monster Index</h1>
				<MonsterIndexFilters
					onFiltersChange={this.onFiltersChange}
					onFiltersAdd={this.onFiltersAdd}
				/>
				<MonsterIndexList />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const allMonsters = state.firestore.ordered.monsters
		? state.firestore.ordered.monsters
		: null;
	return {
		allMonsters: allMonsters,
		filteredMonsters: state.monsters.filtered,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateFilteredMonsters: (filteredMonsters) => {
			dispatch(updateFilteredMonsters(filteredMonsters));
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{ collection: "monsters" }])
)(MonsterIndex);
