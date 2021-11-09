import Auth from './reducers/Auth';
import utubereducer from './reducers/Youtube';
import { combineReducers } from 'redux';
import vimeoReducer from './reducers/Vimeo';
const rootReducer = combineReducers({
	auth: Auth,
	utube: utubereducer,
	vimeo: vimeoReducer
});

export default rootReducer;
