import { combineReducers } from "redux";
import monstersReducer from "./monstersReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
	monsters: monstersReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
});

export default rootReducer;
