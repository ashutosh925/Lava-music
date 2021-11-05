import { LOG_IN, LOG_OUT } from '../../utitils/Types';
const initialState = {
	isAuthenticated: false
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
		default:
			return state;
	}
};
export default reducer;
