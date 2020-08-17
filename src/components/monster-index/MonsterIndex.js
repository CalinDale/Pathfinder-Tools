import React, { Component } from "react";
import MonsterList from "./MonsterList";
import MonsterFilters from "./MonsterFilters";
import { connect } from "react-redux";
import { updateFilteredMonsters } from "../../store/actions/filteredMonstersActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MonsterIndex extends Component {
	state = {
		filters: { name: "", type: "" },
	};
	updateFilters(name, value) {
		let filters = this.state.filters;
		filters[name] = value;
		this.setState({ filters });
		this.props.updateFilteredMonsters(
			this.filterMonsters(this.props.allMonsters, filters)
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
		console.log("beep");
		return (
			<div className="MonsterIndex">
				<h1>Monster Index</h1>
				<MonsterFilters
					handleChange={this.updateFilters.bind(this)}
					filters={this.state.filters}
				/>
				<MonsterList
					monsters={
						this.props.filteredMonsters != null
							? this.props.filteredMonsters
							: this.props.allMonsters
					}
				/>
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
