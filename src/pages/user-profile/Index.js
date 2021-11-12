import React from 'react';

//material ui imports
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import Avatar from '@material-ui/core/Avatar';

//hooks
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';
//files imports
import { useStyles } from './Styles';
import { updateData, updateemail, updatepassword, delteAccount } from '../../redux/actions/Authentication';
const Profile = () => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const [ editCredentials, setEditCredentials ] = React.useState(false);
	const [ btnState, setBtnState ] = React.useState(false);
	const userData = useSelector((state) => state.auth);
	const [ inputValue, setInputValue ] = React.useState({
		username: userData.userName,
		email: userData.userEmail,
		defaultImg: userData.userPhoto
	});

	const goBack = () => {
		history.push('/lavamusic');
	};

	const editMode = () => {
		setEditCredentials(!editCredentials);
	};

	const onSubmit = async (data) => {
		console.log(data.picture.length);
		setBtnState(true);

		const { Email, password, userName } = data;
		const updateNameres = await dispatch(
			updateData({
				displayName: userName,
				imgSend: data.picture[0]
			})
		);
		const updateemailRes = await dispatch(updateemail(Email));
		const updatePassress = await dispatch(updatepassword(password));
		setBtnState(false);
		console.log('name changed', updateNameres);
		console.log('email changed', updateemailRes);
		console.log('passwod changed', updatePassress);

		if (updateemailRes.res) {
			alert('login again to See Changes');
			dispatch({ type: 'LOG OUT' });
		} else {
			alert('email change error try again');
		}
	};

	const deleteUser = async (q) => {
		setBtnState(true);
		q.preventDefault();
		if (window.confirm('Do you want to Delete your profile?')) {
			const response = await dispatch(delteAccount());
			alert('Account Deleted');
			console.log(response.res);
			if (response.res === 'auth/network-request-failed') {
				alert('Network Error try Again');
			}
			if (response.res === 'auth/timeout') {
				alert('Check your internet Connection then try again');
			}
			dispatch({ type: 'LOG OUT' });
			setBtnState(false);
		}
	};

	return (
		<div className={classes.root} style={{ height: editCredentials ? '100%' : '100vh' }}>
			<h5 className={classes.userHeading}>Your Profile </h5>
			<div className={classes.userParentDiv}>
				<div className="d-flex  w-25">
					<button onClick={editMode} style={{ background: 'none' }}>
						{editCredentials ? <CancelIcon /> : <EditIcon />}
					</button>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="d-flex justify-content-center">
						{editCredentials ? (
							<input type="file" {...register('picture')} className={classes.imageUploadInput} />
						) : (
							<Avatar alt="user image" src={userData.userPhoto} className={classes.userImage} />
						)}
					</div>
					<br />
					<p>
						Username: <br />
						{editCredentials ? (
							<input
								type="text"
								{...register('userName')}
								value={inputValue.username}
								onChange={(e) => setInputValue({ ...inputValue, username: e.target.value })}
							/>
						) : (
							userData.userName
						)}
					</p>

					<p>
						Email: <br />
						{editCredentials ? (
							<input
								type="text"
								placeholder={userData.userEmail}
								{...register('Email', {
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: 'Enter Valid Email'
									}
								})}
								autoComplete="off"
								value={inputValue.email}
								onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
							/>
						) : (
							userData.userEmail
						)}
					</p>

					{editCredentials ? <p>New Password</p> : null}
					<p>
						{editCredentials ? (
							<input
								type="Password"
								{...register('password', {
									minLength: { value: 5, message: 'Password must be greater than 5' },
									maxLength: { value: 15, message: 'Password must be less than 15' }
								})}
							/>
						) : null}
					</p>
					<br />
					{editCredentials ? (
						<div className="d-flex justify-content-evenly">
							<button
								style={{ width: '40%', fontSize: '14px', background: btnState ? 'grey' : '#5a585899' }}
								disabled={btnState}
							>
								Submit
							</button>
							<button
								style={{
									width: '50%',
									fontSize: '14px',
									background: btnState ? 'grey' : '#DC143C'
								}}
								onClick={deleteUser}
								disabled={btnState}
							>
								Delete Account
							</button>
						</div>
					) : null}
				</form>
			</div>
			<div className="d-flex justify-content-center mt-4 ">
				<Button variant="contained" color="primary" size="medium" onClick={goBack} className={classes.goBckBtn}>
					Go Back
				</Button>
			</div>
		</div>
	);
};
export default Profile;
