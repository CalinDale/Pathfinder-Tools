export const updateFilteredMonsters = (filteredMonsters) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({
			type: "UPDATE_FILTERED_MONSTERS",
			filteredMonsters,
		});
	};
};

export const initFilteredMonsters = () => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();

		const allMonsters = [];

		firestore
			.collection("monsters")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach(function (doc) {
					allMonsters.push({ id: doc.id, ...doc.data() });
				});
				dispatch({
					type: "INIT_FILTERED_MONSTERS",
					allMonsters,
				});
			});
	};
};
