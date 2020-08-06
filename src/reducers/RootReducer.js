const initState = {
	monsters: [
		{ key: "0", name: "Slime", type: "Ooze", subtypes: [] },
		{ key: "1", name: "Skeleton", type: "Undead", subtypes: [] },
		{ key: "2", name: "Ice Zombie", type: "Undead", subtypes: ["Cold"] },
	],
	tools: [
		{ name: "Monster Index", link: "/monsters", key: 0 },
		{ name: "Monster Builder", link: "/", key: 1 },
		{ name: "Encounter Builder", link: "/", key: 2 },
		{ name: "Encounter Table Builder", link: "/", key: 3 },
		{ name: "Spell Index", link: "/", key: 4 },
		{ name: "Weather Generator", link: "/", key: 5 },
		{ name: "Treasure Planner", link: "/", key: 6 },
		{ name: "Item Creation", link: "/", key: 7 },
		{ name: "Feats Index", link: "/", key: 8 },
	],
	filters: { name: "", type: "" },
};

const rootReducer = (state = initState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case "UPDATE_FILTER":
			newState.filters[action.name] = action.value;
			break;
	}

	console.log(newState);
	return newState;
};

export default rootReducer;
