import Auth from './Auth';
import utubereducer from './YoutubeResponse';
import videos from './Playlists';
import { combineReducers } from 'redux';
import specificVideo from './PlaySpecificVid';
const rootReducer = combineReducers({
	auth: Auth,
	utube: utubereducer,
	videos: videos,
	oneVideo: specificVideo
});

export default rootReducer;
