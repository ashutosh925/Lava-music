const initialState = {
	isAuthenticated: localStorage.getItem('authlava') ? true : false,
	id: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			console.log('usedisptach login');
			localStorage.setItem('authlava', true);
			return {
				...state,
				isAuthenticated: true
			};
		case 'LOG OUT':
			localStorage.removeItem('authlava');
			return {
				...state,
				isAuthenticated: false
			};
		default:
			return state;
	}
};
export default reducer;
