import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class MonsterDetails extends Component {
	render() {
		const monsterDetails = this.props.monster ? (
			<h1>{this.props.monster.name}</h1>
		) : (
			<h1>No Monster Found / Loading Monster</h1>
		);
		return <div className="MonsterDetailsContainer">{monsterDetails}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.monster_id;
	const monsters = state.firestore.data.monsters;
	const monster = monsters ? monsters[id] : null;
	return {
		monster: monster,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "monsters" }])
)(MonsterDetails);
