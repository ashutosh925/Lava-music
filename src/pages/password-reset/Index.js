import React, { useState } from 'react';
//material ui imports
import Button from '@material-ui/core/Button';

// hooks import
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//files import
import AlertMsg from '../../components/Alertmsg';
import { useStyles } from './Style';
import { passwordReset } from '../../redux/actions/Authentication';
const PasswordReset = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();
	const [ alertMsg, setAlertMsg ] = useState({ success: false, error: false, btnState: false });
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = async (data) => {
		setAlertMsg({ ...alertMsg, btnState: true });
		const response = await dispatch(
			passwordReset({
				email: data.Email
			})
		);
		if (response.res.includes('check your Email')) {
			setAlertMsg({ ...alertMsg, success: true });
			setTimeout(() => {
				setAlertMsg({ ...alertMsg, success: false, btnState: false });
			}, 2000);
		}
		if (response.res.includes('auth/user-not-found')) {
			setAlertMsg({ ...alertMsg, error: true });
			setTimeout(() => {
				setAlertMsg({ ...alertMsg, success: false, btnState: false });
			}, 2000);
		}
	};

	return (
		<div className={classes.root}>
			{alertMsg.success ? <AlertMsg variant="success" msg="Check Your Email" /> : null}
			{alertMsg.error ? <AlertMsg variant="error" msg="User Not Found" /> : null}
			<div className={classes.resetPasswordDiv}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						autoComplete="off"
						type="text"
						placeholder="Enter your email"
						{...register('Email', {
							required: 'Email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'Invalid email address'
							}
						})}
					/>
					<br />

					{errors.Email && <span>{errors.Email.message}</span>}
					<br />

					<button
						disabled={alertMsg.btnState}
						className={classes.submitBtn}
						style={{ background: alertMsg.btnState ? 'grey' : '#5a585899' }}
					>
						Reset
					</button>
				</form>
			</div>

			<Button variant="contained" color="primary" onClick={() => history.push('/')} className={classes.btns}>
				Go back
			</Button>
		</div>
	);
};
export default React.memo(PasswordReset);
