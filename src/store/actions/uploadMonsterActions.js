export const uploadMonster = (monster) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection("monsters")
			.add(monster)
			.then(() => {
				dispatch({ type: "UPLOAD_MONSTER", monster });
			})
			.catch((err) => {
				dispatch({ type: "UPLOAD_MONSTER_ERROR", err });
			});
		//dispatch({ type: "UPLOAD_MONSTER", monster });
	};
};
