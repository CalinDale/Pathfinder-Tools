import React from "react";
import { Link } from "react-router-dom";

const MonsterList = ({ monsters }) => {
	const FilteredMonsterList =
		monsters &&
		monsters.map((monster) => {
			return (
				<div className="MonsterLink" key={monster.id}>
					<Link to={"/monsters/" + monster.id}>{monster.name}</Link>
				</div>
			);
		});
	return (
		<nav className="MonsterList">
			<h2>Results</h2>
			{FilteredMonsterList}
		</nav>
	);
};

export default MonsterList;
