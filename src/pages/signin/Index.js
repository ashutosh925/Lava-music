import React, { useState, useLayoutEffect } from 'react';
//hooks
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//files import
import { useStyles } from './Styles';
import youtube from '../../redux/actions/YoutubeAction';
const Login = () => {
	let history = useHistory();
	const classes = useStyles();
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [ wrongInfo, setWrongInfo ] = useState(false);
	const [ credentals, setstate ] = useState({
		email: 'fiverr@gmail.com',
		password: '12345'
	});

	useLayoutEffect(() => {
		if (isAuth) {
			history.push('/lavamusic');
		}
		// dispatch(youtube());
	}, []);
	const onSubmit = (data) => {
		if (credentals.email === data.Email && credentals.password === data.Password) {
			dispatch({ type: 'LOGIN' });
			history.push('/lavamusic');
			console.log('login successful');
			setWrongInfo(false);
		} else {
			setWrongInfo(true);
		}
	};
	console.log(isAuth, 'sign in rendering');
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
							{...register('Password', { required: true })}
						/>
						<br />
						{errors.Password && 'Password length cannot less than 5'}
					</div>

					<button>Login</button>
				</form>
				<div className="w-50 m-auto">{wrongInfo ? <h5>Incorrect credentals</h5> : null}</div>
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
