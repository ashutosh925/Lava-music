import { combineReducers } from 'redux';
//reducers

import Auth from './reducers/Auth';
import utubereducer from './reducers/Youtube';
import player from './reducers/Player';
import vimeoReducer from './reducers/Vimeo';
const rootReducer = combineReducers({
	auth: Auth,
	utube: utubereducer,
	vimeo: vimeoReducer,
	player: player
});

export default rootReducer;
