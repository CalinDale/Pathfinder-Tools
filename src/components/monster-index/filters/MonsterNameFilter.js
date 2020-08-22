import React from "react";

const MonsterIndexNameFilter = (props) => {
	function handleChange(event) {
		props.updateFilter(event.target.name, event.target.value);
	}
	return (
		<div id="nameFilterContainer">
			<label>Name:</label>
			<input
				id="nameFilter"
				name="name"
				type="text"
				value={props.value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default MonsterIndexNameFilter;
