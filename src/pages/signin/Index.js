import React, { useState, useLayoutEffect } from 'react';
//hooks
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

//files import
import { useStyles } from './Styles';
import { signin } from '../../redux/actions/Authentication';
import AlertMsg from '../../components/Alertmsg';
import {app} from "../../redux/actions/Authentication"

const Login = () => {
	let history = useHistory();
	const classes = useStyles();
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	const [ incorrentCredentials, setIncrecredentails ] = useState(false);
	const [ buttonState, setButtonState ] = useState(false);
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [ alertMsg, setAlertMsg ] = useState({
		notFound: false,
		error: false
	});

	useLayoutEffect(() => {
		if (isAuth) {
			history.push('/lavamusic');
		}
		// dispatch(youtube());
	});

	const onSubmit = async (data) => {
		setButtonState(true);
		setIncrecredentails(false);
		const response = await dispatch(
			signin({
				email: data.Email,
				password: data.Password
			})
		);
		if (response?.includes('signIn')) {
			history.push('/lavamusic');
			dispatch({ type: 'LOGIN' });
			setButtonState(false);
		}

		if (response?.includes('uth/user-not-found')) {
			setButtonState(false);
			setAlertMsg({
				...alertMsg,
				notFound: true
			});
			setTimeout(() => {
				setAlertMsg({
					...alertMsg,
					notFound: false
				});
			}, 3000);
		}
		if (response?.includes('auth/wrong-password')) {
			setButtonState(false);
			setIncrecredentails(true);
		}
		if (response.includes('auth/network-request-failed')) {alert('check your internet connection'); setButtonState(false);}
	};
	console.log(app.database)
	return (
		<div className={classes.root}>
			<div className={classes.inputParentDiv}>
				<h4 className="mb-4 mt-3">User Login</h4>
				{alertMsg.notFound ? <AlertMsg msg="User not found" variant="error" /> : null}
				{alertMsg.error ? <AlertMsg msg="Check your Internet Connection" variant="error" /> : null}

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.inputSearch}>
						<h5>Email</h5>
						<input
							type="text"
							{...register('Email', {
								required: 'Email is Required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: 'Enter Valid Email'
								}
							})}
						/>
						<br />
						{errors.Email && <span style={{ color: 'red' }}>{errors.Email.message} </span>}
						<h5>Password</h5>
						<input
							type="password"
							{...register('Password', {
								required: 'Password is required',
								minLength: { value: 5, message: 'Password length cannot less than 6' },
								maxLength: 25
							})}
						/>
						<br />
						{errors.Password && <span style={{ color: 'red' }}>{errors.Password.message}</span>}
					</div>
					{incorrentCredentials ? <p>Wrong password</p> : null}
					<button disabled={buttonState} style={{ background: buttonState ? 'grey' : '#5a585899' }}>
						Login
					</button>
					<br />
					<Link to="/resetpassword" className={classes.resetpass}>
						Forgot Password ? <span style={{ color: 'red' }}>Click here</span>
					</Link>
				</form>
				<div className={classes.divider}>
					<h5>OR</h5>
				</div>
				<div className="d-flex justify-content-center">
					<button onClick={() => history.push('/signup') } style={{ background: buttonState ? 'grey' : '#5a585899' }} disabled={buttonState}>Sign Up</button>
				</div>
			</div>
		</div>
	);
};
export default Login;
