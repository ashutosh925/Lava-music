import { PAUSE_SONG } from '../../utitils/Types';
const initialState = {
	pauseVideo: false
};

const player = (state = initialState, action) => {
	switch (action.type) {
		case 'PLAY_SONG':
			return {
				...state,
				pauseVideo: true
			};
		case PAUSE_SONG:
			return {
				...state,
				pauseVideo: false
			};
		default:
			return state;
	}
};
export default player;
