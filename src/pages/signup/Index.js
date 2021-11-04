import React from 'react';
//hooks
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
//files import
import { useStyles } from './Styles';
const Signup = () => {
	const classes = useStyles();
	const history = useHistory();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className={classes.root}>
			<br />
			<br />

			<h5>SIGN UP</h5>
			<div className={classes.formParent}>
				<div className={classes.inputSignup}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className="me-2">Username </label>
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
						<br />

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
							{...register('password', { required: true, minLength: 5, maxLength: 25 })}
						/>
						<br />
						{errors.password && <span className={classes.errorMsg}>Passowrd length is short</span>}
						<br />
						<button>Submit</button>
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
