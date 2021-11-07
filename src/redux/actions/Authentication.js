// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAvUT-D1tc5m7V7sQ04CvArznQbyjWlVnM',
	authDomain: 'lava-music-e97fd.firebaseapp.com',
	projectId: 'lava-music-e97fd',
	storageBucket: 'lava-music-e97fd.appspot.com',
	messagingSenderId: '839234061638',
	appId: '1:839234061638:web:15db2cb1b39554476f1147',
	measurementId: 'G-15G4VSQ19F'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//
export const signup = ({ email, password }) => async (dispatch, getState) => {
	try {
		const response = await createUserWithEmailAndPassword(auth, email, password);

		return response.operationType;
	} catch (error) {
		console.log(error.code);
		return error.code;
		// return { message: code ,};
	}
};

export const signin = ({ email, password, displayName }) => async (dispatch, getState) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password, displayName);
		console.log(response.user);
		dispatch({ type: 'GET_USER_DATA', payload: response });
		return response.operationType;
	} catch (error) {
		console.log(error.code);
		return error.code;
		// return { message: code ,};
	}
};
export const signout = () => async (dispatch, getState) => {
	try {
		const response = await signOut(auth);
		console.log(response);
		return 'user Log out';
	} catch (error) {
		console.log(error);
		// return error.code;
		// return { message: code ,};
	}
};
