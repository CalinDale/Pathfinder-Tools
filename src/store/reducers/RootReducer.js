import { combineReducers } from "redux";
import monstersReducer from "./monstersReducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
	monsters: monstersReducer,
});

export default rootReducer;
