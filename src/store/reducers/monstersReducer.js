const monsters = [
	{ id: "0", name: "Slime", type: "Ooze", subtypes: [] },
	{ id: "1", name: "Skeleton", type: "Undead", subtypes: [] },
	{ id: "2", name: "Ice Zombie", type: "Undead", subtypes: ["Cold"] },
];

const initState = {
	all: monsters,
	filtered: monsters,
};

const monstersReducer = (state = initState, action) => {
	let newState = { ...state };
	console.log("Reducer!");
	console.log(action);
	console.log(newState);

	switch (action.type) {
		case "UPDATE_FILTERED_MONSTERS":
			newState.filtered = action.filteredMonsters;
			break;
		default:
			break;
	}

	return newState;
};

export default monstersReducer;
