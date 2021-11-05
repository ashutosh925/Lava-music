// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/Store';
// import { BrowserRouter } from 'react-router-dom';
// ReactDOM.render(
// <Provider store={store}>
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>
// </Provider>,
// 	document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persister } from './redux/Store';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persister}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
