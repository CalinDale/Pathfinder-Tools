import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class MonsterDetails extends Component {
	render() {
		const monsterDetails = this.props.monster ? (
			<h1>{this.props.monster.name}</h1>
		) : (
			<h1>No Monster Found</h1>
		);
		return <div className="MonsterDetailsContainer">{monsterDetails}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.monster_id;
	return {
		monster: state.firestore.ordered.monsters.find(
			(monster) => monster.id === id
		),
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "monsters" }])
)(MonsterDetails);
