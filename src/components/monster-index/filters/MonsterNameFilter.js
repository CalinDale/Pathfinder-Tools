import React from "react";

const MonsterIndexNameFilter = (props) => {
	function handleChange(event) {
		let filterName = event.target.getAttribute("data-filterName");
		let values = {};
		values[event.target.id] = event.target.value;

		props.updateFilter(filterName, values);
	}
	return (
		<div id="nameFilterContainer">
			<label>Name:</label>
			<input
				id="nameInput"
				data-filtername={props.filter.filterName}
				name="name"
				type="text"
				value={props.filter.values.nameInput}
				onChange={handleChange}
			/>
		</div>
	);
};

export default MonsterIndexNameFilter;
