import { combineReducers } from "redux";
import monstersReducer from "./monstersReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import uploadMonstersReducer from "./uploadMonstersReducer";

const rootReducer = combineReducers({
	monsters: monstersReducer,
	uploadMonsters: uploadMonstersReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
});

export default rootReducer;
