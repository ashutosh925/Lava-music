import { GET_RESULT, PLAY_THIS_SONG, ADD_TO_PLAYPLIST, DELETE_THIS_SONG, LOG_OUT } from '../../utitils/Types';
const initialState = {
	responseResults: '',
	utubeVideoPlay: '',
	views: [],
	playlist: [],
	videoDuration: ''
};

const utubereducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RESULT:
			const maptostate = action.payload.map((items) => {
				return { ...items, pauseSong: false };
			});
			return {
				...state,
				responseResults: maptostate
			};
		case PLAY_THIS_SONG:
			return {
				...state,
				utubeVideoPlay: action.payload
			};
		case ADD_TO_PLAYPLIST:
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
			return {
				...state,
				respononseResults: '',
				utubeVideoPlay: ''
			};
		case 'GET_DURATION':
			return {
				...state,
				videoDuration: action.payload
			};
		case 'PLAY_PAUSE':
			const updateBtnPause = state.responseResults.map((items) => {
				return items.id.videoId === action.payload
					? { ...items, pauseSong: true }
					: { ...items, pauseSong: false };
			});
			return {
				...state,
				responseResults: updateBtnPause
			};

		case 'PAUSE_UTUBE_SONG_BTNSTATE':
			const updateBtnplay = state.responseResults.map((items) => {
				return items.id.videoId === action.payload
					? { ...items, pauseSong: false }
					: { ...items, pauseSong: false };
			});
			return {
				...state,
				responseResults: updateBtnplay
			};
		default:
			return state;
	}
};
export default utubereducer;
