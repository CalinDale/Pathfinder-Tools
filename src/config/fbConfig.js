// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyCypuy6ltu_ULaKz8J7i6kZV-T1U1czZe8",
	authDomain: "pathfindertools-4b713.firebaseapp.com",
	databaseURL: "https://pathfindertools-4b713.firebaseio.com",
	projectId: "pathfindertools-4b713",
	storageBucket: "pathfindertools-4b713.appspot.com",
	messagingSenderId: "455277968405",
	appId: "1:455277968405:web:0fb1d1031b2e0a8108221c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
