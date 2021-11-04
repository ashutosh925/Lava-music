import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
	const isAuth = useSelector((state) => state.rootreducers?.auth?.isAuthenticated);

	return <Route {...restOfProps} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default ProtectedRoute;
