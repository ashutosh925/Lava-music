import { GET_RESULT, PLAY_THIS_SONG, ADD_TO_PLAYPLIST, DELETE_THIS_SONG, VIMEO_GET_RESULT } from '../../utitils/Types';
const initialState = {
	respononseResults: '',
	utubeVideoPlay: '',
	playlist: []
};

const videmoReducer = (state = initialState, action) => {
	switch (action.type) {
		case VIMEO_GET_RESULT:
			return {
				...state,
				respononseResults: action.payload
			};
		case PLAY_THIS_SONG:
			return {
				...state,
				utubeVideoPlay: ` http://www.youtube.com/embed/${action.payload}`
			};
		case ADD_TO_PLAYPLIST:
			console.log('action.payload', action.payload);
			const newPlaylist = [ ...state.playlist, action.payload ];
			return {
				...state,
				playlist: newPlaylist
			};
		case DELETE_THIS_SONG:
			return {
				...state
			};
		default:
			return state;
	}
};
export default videmoReducer;
