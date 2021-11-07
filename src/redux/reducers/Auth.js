import { LOG_IN, LOG_OUT, GET_USER_DATA } from '../../utitils/Types';
const initialState = {
	isAuthenticated: true,
	userData: ''
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
				isAuthenticated: false
			};
		case GET_USER_DATA:
			return {
				...state,
				userData: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
