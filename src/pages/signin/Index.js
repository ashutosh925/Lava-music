import React, { useState, useLayoutEffect } from 'react';
//hooks
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//files import
import { useStyles } from './Styles';
import { signin } from '../../redux/actions/Authentication';
const Login = () => {
	let history = useHistory();
	const classes = useStyles();
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [ wrongInfo, setWrongInfo ] = useState(false);
	const [ errorMsg, setErrorMsg ] = useState(false);
	const [ credentals ] = useState({
		email: 'fiverr@gmail.com',
		password: '12345'
	});

	useLayoutEffect(() => {
		if (isAuth) {
			history.push('/lavamusic');
		}
		// dispatch(youtube());
	});
	const onSubmit = async (data) => {
		const response = await dispatch(
			signin({
				email: data.Email,
				password: data.Password
			})
		);
		switch (response) {
			case 'signIn':
				// history.push('/lavamusic');
				// dispatch({ type: 'LOGIN' });
				break;
			case 'auth/wrong-password':
				alert('Wrong password try again');
				break;
			case ' uth/user-not-found':
				alert('User not found');
				break;
			case 'auth/network-request-failed':
				alert('check your internet connection');
				break;
			default:
				break;
		}
		console.log(response);
	};
	return (
		<div className={classes.root}>
			<p>email :fiverr@gmail.com</p>
			<p>password :12345</p>
			<div className={classes.inputParentDiv}>
				<h5>User Login</h5>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.inputSearch}>
						<input
							required
							type="text"
							placeholder="Enter Email"
							{...register('Email', {
								required: true,
								pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
							})}
						/>
						<br />
						{errors.Email && 'Enter correct Email'}
						<br />
						<br />

						<input
							required
							type="password"
							placeholder="Enter Password"
							{...register('Password', { required: true, minLength: 6, maxLength: 25 })}
						/>
						<br />
						{errors.Password && 'Password length cannot less than 6'}
					</div>

					<button>Login</button>
				</form>
				<div className="w-50 m-auto">{errorMsg ? <h5>Incorrect credentals</h5> : null}</div>
				<div className={classes.divider}>
					<h5>OR</h5>
				</div>
				<div className="d-flex justify-content-center">
					<button onClick={() => history.push('/signup')}>Sign Up</button>
				</div>
			</div>
		</div>
	);
};
export default Login;

// if (credentals.email === data.Email && credentals.password === data.Password) {
// 	dispatch({ type: 'LOGIN' });
// 	const
// 	history.push('/lavamusic');
// 	console.log('login successful');
// 	setWrongInfo(false);
// } else {
// 	setWrongInfo(true);
// }
