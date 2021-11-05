const initialState = {
	video: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PLAY THIS':
			return {
				...state,
				video: `https://www.youtube.com/watch?v=${action.payload}`
			};

		default:
			return state;
	}
};
export default reducer;
