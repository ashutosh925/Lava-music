// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import rootreducers from './reducers/Index';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const initialState = {};

// const Middleware = [ thunk ];

// const reducers = combineReducers({
// 	rootreducers
// });

// const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...Middleware)));
// export default store;

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './CombineReducers';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: [ 'auth', 'utube' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export const persister = persistStore(store);

//working redux persist
