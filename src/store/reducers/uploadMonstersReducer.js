const initState = {
	uploadedMonsters: [],
};

const uploadMonstersReducer = (state = initState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case "UPLOAD_MONSTER":
			newState.uploadedMonsters.push(action.monster);
			break;
		default:
			break;
	}

	return newState;
};

export default uploadMonstersReducer;
