import React from "react";
import MonsterIndexList from "./MonsterIndexList";
import MonsterIndexFilters from "./filters/MonsterIndexFilters";

const MonsterIndex = (props) => {
	return (
		<div className="MonsterIndex">
			<h1>Monster Index</h1>
			<MonsterIndexFilters />
			<MonsterIndexList />
		</div>
	);
};

export default MonsterIndex;
