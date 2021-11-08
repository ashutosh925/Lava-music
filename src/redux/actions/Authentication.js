// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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

const auth = getAuth(app);
const storage = getStorage(app, 'gs://lava-music-e97fd.appspot.com');
const mountainImagesRef = ref(storage, 'images/mountains.jpg');

//image upload function

const uploadImage = async (imgsend, userId) => {
	const storageRef = ref(storage, userId);

	const uploadTask = await uploadBytes(storageRef, imgsend).then((snapshot) => {
		console.log('image  uploaded');
	});
	try {
		const getUrl = await getDownloadURL(ref(storage, userId));
		console.log('from url', getUrl);
		return getUrl;
	} catch (error) {
		console.log(error);
	}
};

//update profile

const updateData = async (displayName, responseFromImg) => {
	try {
		const nameUpdate = updateProfile(auth.currentUser, { displayName: displayName, photoURL: responseFromImg });
		console.log(nameUpdate, 'from signup update profile');
	} catch (error) {
		console.log('update name failed', error);
	}
};

//sigup in function

export const signup = ({ email, password, displayName, imgsend }) => async () => {
	try {
		//user create
		const response = await createUserWithEmailAndPassword(auth, email, password);
		//user image upload
		const responseFromImg = await uploadImage(imgsend, response.user.uid);
		//user name and image update
		const updateRes = await updateData(displayName, responseFromImg);

		return response.operationType;
	} catch (error) {
		console.log(error.code);
		return error.code;
		// return { message: code ,};
	}
};

//sigin in function

export const signin = ({ email, password, displayName }) => async (dispatch) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password, displayName);
		const userId = response.user.uid;

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
