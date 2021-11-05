const initialState = {
	video: '',
	serverResponsive: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PLAY THIS':
			return {
				...state,
				video: action.payload
			};

		default:
			return state;
	}
};
export default reducer;
