const initialState = {
	id: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				id: state.id + 1
			};
		case 'decrement':
			return {
				...state,
				id: state.id - 1
			};
		default:
			return state;
	}
};
export default reducer;
