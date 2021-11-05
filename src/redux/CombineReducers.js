import Auth from './reducers/Auth';
import utubereducer from './reducers/YoutubeResponse';
import videos from './reducers/Playlists';
import { combineReducers } from 'redux';
import specificVideo from './reducers/PlayUtubeSpecificVid';
const rootReducer = combineReducers({
	auth: Auth,
	utube: utubereducer,
	videos: videos,
	oneVideo: specificVideo
});

export default rootReducer;
