import {
	GET_RESULT,
	PLAY_THIS_SONG,
	ADD_TO_PLAYPLIST,
	DELETE_THIS_SONG,
	VIMEO_GET_RESULT,
	LOG_OUT
} from '../../utitils/Types';
const initialState = {
	respononseResults: '',
	utubeVideoPlay: '',
	playlist: [],
	videoDuration: ''
};

const videmoReducer = (state = initialState, action) => {
	switch (action.type) {
		case VIMEO_GET_RESULT:
			const results = action.payload;
			const setBTnState = [ results ].map((items) => {
				return { ...items, pauseSong: false };
			});
			return {
				...state,
				respononseResults: setBTnState
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
		case 'PAUSE_VIMEO_SONG':
			// const updateBtnPause = [ state.respononseResults ].map((items) => {
			// 	return items.id.videoId === action.payload
			// 		? { ...items, pauseSong: true }
			// 		: { ...items, pauseSong: false };
			// });
			console.log(action.payload);
			return {
				...state
				// respononseResults: updateBtnPause
			};
		case 'PLAY_VIMEO_SONG':
			const updateBtnPlay = state.responseResults.map((items) => {
				return items.id.videoId === action.payload
					? { ...items, pauseSong: false }
					: { ...items, pauseSong: false };
			});
			return {
				...state,
				respononseResults: updateBtnPlay
			};
		default:
			return state;
	}
};
export default videmoReducer;
