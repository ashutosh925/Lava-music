import { GET_RESULT, PLAY_THIS_SONG, ADD_TO_PLAYPLIST, DELETE_THIS_SONG, LOG_OUT } from '../../utitils/Types';
const initialState = {
	respononseResults: '',
	utubeVideoPlay: '',
	views: [],
	playlist: []
};

const utubereducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RESULT:
			return {
				...state,
				respononseResults: action.payload
			};
		case PLAY_THIS_SONG:
			return {
				...state,
				utubeVideoPlay: action.payload
			};
		case ADD_TO_PLAYPLIST:
			console.log('action.payload', action.payload);
			const newPlaylist = [ ...state.playlist, action.payload ];
			return {
				...state,
				playlist: newPlaylist
			};
		case 'GET_VIEWS':
			return {
				...state,
				views: action.payload
			};
		case LOG_OUT:
			console.log('action.payloadutubee');
			return {
				...state,
				respononseResults: '',
				utubeVideoPlay: ''
			};
		default:
			return state;
	}
};
export default utubereducer;
