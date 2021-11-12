import { LOG_IN, LOG_OUT, GET_USER_DATA ,DEFAULT_PHOTO } from '../../utitils/Types';
const initialState = {
	isAuthenticated: false,
	userId: '',
	userName: '',
	userEmail: '',
	userPhoto: '',

};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
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
				userPhoto: "",
				userToken:""
			};
		case GET_USER_DATA:
		
			return {
				...state,
				isAuthenticated: true,
				userId: action.payload?.uid,
				userName: action.payload?.displayName,
				userEmail: action.payload?.email,
				userPhoto: action.payload?.photoURL,
			
			};
	
				
		default:
			return state;
	}
};
export default reducer;
