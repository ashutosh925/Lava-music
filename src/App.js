import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//files import

import Container from './container/Index';
import ProtectedRoute from './utitils/ProtectedRoutes';
import Login from './pages/signin/Index';
import Signup from './pages/signup/Index';
import userprofile from './pages/user-profile/Index';
import PasswordReset from './pages/password-reset/Index';
// import { useSelector } from 'react-redux';
const App = () => {
	// const state = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/resetpassword" component={PasswordReset} />
					<ProtectedRoute exact path="/lavamusic" component={Container} />
					<ProtectedRoute exact path="/user-profile" component={userprofile} />
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
