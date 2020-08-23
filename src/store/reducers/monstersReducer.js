const initState = {
	filtered: null,
};

const monstersReducer = (state = initState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case "UPDATE_FILTERED_MONSTERS":
			newState.filtered = action.filteredMonsters;
			break;
		case "INIT_FILTERED_MONSTERS":
			newState.filtered = action.allMonsters;
			break;
		default:
			break;
	}

	return newState;
};

export default monstersReducer;
