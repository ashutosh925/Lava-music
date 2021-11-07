import React, { useState } from 'react';

//hooks
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//files import
import { signup } from '../../redux/actions/Authentication';
import { useStyles } from './Styles';
const Signup = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const { register, handleSubmit, formState: { errors } } = useForm();

	const [ errorMessage, setErrorMessage ] = useState(false);
	const onSubmit = async (data) => {
		setErrorMessage(false);

		const response = await dispatch(signup({ email: data.Email, password: data.password, displayName: 'ali' }));
		console.log(response);

		switch (response) {
			case 'auth/email-already-in-use':
				console.log('error tried');
				setErrorMessage(true);
				break;
			case 'signIn':
				alert('account created successfully');
				break;
			case 'auth/network-request-failed':
				alert('check your internet connection');
				break;
			default:
				return console.log('no matchs');
		}
	};

	return (
		<div className={classes.root}>
			<br />
			<br />

			<h5>SIGN UP</h5>
			<div className={classes.formParent}>
				<div className={classes.inputSignup}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<br />
						<label className="me-4">Email </label>
						<br />
						<input
							type="text"
							{...register('Email', {
								required: true,
								pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
							})}
						/>
						<br />

						{errors.Email && <span className={classes.errorMsg}>Enter valid Email</span>}
						<br />
						<br />

						<label className="me-2">Password </label>
						<br />
						<input
							type="Password"
							{...register('password', { required: true, minLength: 6, maxLength: 25 })}
						/>
						<br />
						{errors.password && (
							<span className={classes.errorMsg}>Passowrd length must greater than 6</span>
						)}
						<br />
						<button>Submit</button>
						<br />
						{errorMessage ? <span style={{ color: 'red' }}>Email already in use</span> : null}
					</form>
					<p href="/" className={classes.ahref} onClick={() => history.push('/')}>
						Already have Account ? Sign-in
					</p>
				</div>
			</div>
		</div>
	);
};
export default Signup;

{
	/* <label className="me-2">Username </label>
<br />
<input
	type="text"
	{...register('username', {
		required: true,
		minLength: 5
	})}
/>
<br />
{errors.username && (
	<span className={classes.errorMsg}>username length must be greater than 5</span>
)}
<br /> */
}
