import Auth from './reducers/Auth';
import utubereducer from './reducers/Youtube';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: Auth,
	utube: utubereducer
});

export default rootReducer;
