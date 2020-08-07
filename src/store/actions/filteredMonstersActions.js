export const updateFilteredMonsters = (filteredMonsters) => {
	return (dispatch, getState) => {
		dispatch({
			type: "UPDATE_FILTERED_MONSTERS",
			filteredMonsters,
		});
	};
};
