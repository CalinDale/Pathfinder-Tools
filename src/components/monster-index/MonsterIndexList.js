import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MonsterIndexList extends Component {
	render() {
		let monsterLinks =
			this.props.monsters &&
			this.props.monsters.map((monster) => {
				return (
					<div className="MonsterLink" key={monster.id}>
						<Link to={"/monsters/" + monster.id}>{monster.name}</Link>
					</div>
				);
			});
		return (
			<nav className="MonsterList">
				<h2>Results</h2>
				{monsterLinks}
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		monsters: state.monsters.filtered,
	};
};

export default connect(mapStateToProps)(MonsterIndexList);
