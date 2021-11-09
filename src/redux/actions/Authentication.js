// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	sendPasswordResetEmail,
	updateEmail,
	updatePassword
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

const auth = getAuth(app);
const storage = getStorage(app, 'gs://lava-music-e97fd.appspot.com');

//image upload function

const uploadImage = async (imgsend, userId) => {
	const storageRef = ref(storage, userId);

	const uploadTask = await uploadBytes(storageRef, imgsend);
	try {
		const getUrl = await getDownloadURL(ref(storage, userId));
		console.log('img upload succedd', getUrl);
		return getUrl;
	} catch (error) {
		console.log(error);
	}
};

//new account
//update name and picture
export const updateData = (displayName) => async (dispatch) => {
	try {
		const nameUpdate = updateProfile(auth.currentUser, { displayName: displayName });
		return { res: 'updated' };
	} catch (error) {
		return { res: 'not updated' };
	}
};

//update email
export const updateemail = (email) => async (dispatch) => {
	try {
		const emailRes = await updateEmail(auth.currentUser, email);

		return { res: true };
	} catch (error) {
		return { res: false };
	}
};
export const updatepassword = (password) => async (dispatch) => {
	try {
		const passwordRes = await updatePassword(auth.currentUser, password);

		return { res: 'pass changed' };
	} catch (error) {
		return { res: 'pass not changed' };
	}
};

const nameUpdate = async (displayName, responseFromImg) => {
	console.log(displayName, 'from auth usingip');
	try {
		const nameUpdate = updateProfile(auth.currentUser, { displayName: displayName, photoURL: responseFromImg });

		return { res: 'updated' };
	} catch (error) {
		return { res: 'not updated' };
	}
};
//////////////////
export const signup = ({ email, password, displayName, imgsend }) => async () => {
	try {
		//user create
		const response = await createUserWithEmailAndPassword(auth, email, password);
		//user image upload
		const responseFromImg = await uploadImage(imgsend, response.user.uid);
		//user name and image update
		const updateRes = await nameUpdate(displayName, responseFromImg);
		console.log(updateRes, 'suerupdate');
		return response.operationType;
	} catch (error) {
		console.log(error.code);
		return error.code;
		// return { message: code ,};
	}
};

//sign in in function

export const signin = ({ email, password }) => async (dispatch) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password);
		console.log(response);
		dispatch({ type: 'GET_USER_DATA', payload: response.user });
		return response.operationType;
	} catch (error) {
		console.log(error.code);
		return error.code;
		// return { message: code ,};
	}
};

//sign out function
export const signout = () => async () => {
	try {
		const response = await signOut(auth);
		console.log(response, 'success');
		return 'user Log out';
	} catch (error) {
		console.log(error);
		// return error.code;
		// return { message: code ,};
	}
};

//reset password

export const passwordReset = ({ email }) => async (dispatch) => {
	try {
		const response = await sendPasswordResetEmail(auth, email);
		console.log(response);
		return { res: 'check your Email' };
	} catch (error) {
		console.log(error.code);
		return { res: error.code };
	}
};
