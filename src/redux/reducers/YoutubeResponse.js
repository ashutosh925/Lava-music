const initialState = {
	playlist: ''
};

const utubereducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET RES':
			return {
				...state,
				playlist: action.payload
			};
		default:
			return state;
	}
};
export default utubereducer;
