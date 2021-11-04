import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './container/Index';
import ProtectedRoute from './utitils/ProtectedRoutes';
import Login from './pages/signin/Index';
import Signup from './pages/signup/Index';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
	const state = useSelector((state) => state?.rootreducers?.auth?.isAuthenticated);
	console.log(state);
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<ProtectedRoute exact path="/signup" component={Signup} />
					<ProtectedRoute exact path="/lavamusic" component={Container} />
					<Route>
						<h3 className="text-center" style={{ height: '100vh' }}>
							404 not Found
						</h3>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default React.memo(App);
