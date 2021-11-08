import { LOG_IN, LOG_OUT, GET_USER_DATA } from '../../utitils/Types';
const initialState = {
	isAuthenticated: false,
	userId: '',
	userName: '',
	userEmail: '',
	userPhoto: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			console.log('usedisptach login');

			return {
				...state,
				isAuthenticated: true
			};
		case LOG_OUT:
			return {
				...state,
				isAuthenticated: false,
				userId: "",
				userName: "",
				userEmail: "",
				userPhoto: ""
			};
		case GET_USER_DATA:
			console.log(action.payload?.photoURL,"fom red")
			return {
				...state,
				isAuthenticated: true,
				userId: action.payload?.uid,
				userName: action.payload?.displayName,
				userEmail: action.payload?.email,
				userPhoto: action.payload?.photoURL
			};
		default:
			return state;
	}
};
export default reducer;
