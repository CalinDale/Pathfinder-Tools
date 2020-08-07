export const updateFilteredMonsters = (filteredMonsters) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({
			type: "UPDATE_FILTERED_MONSTERS",
			filteredMonsters,
		});
	};
};
