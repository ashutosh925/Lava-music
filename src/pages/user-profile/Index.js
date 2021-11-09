import React, { useEffect } from 'react';

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
import user1 from '../../assets/defaultpic.png';
import { updateData, updateemail, updatepassword } from '../../redux/actions/Authentication';
const Profile = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const [ editCredentials, setEditCredentials ] = React.useState(false);
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	const userData = useSelector((state) => state.auth);
	const goBack = () => {
		history.push('/lavamusic');
	};
	useEffect(() => {
		if (!isAuth) {
			history.push('/lavamusic');
		}
		// dispatch(youtube());
	});
	const editMode = () => {
		setEditCredentials(!editCredentials);
	};

	const onSubmit = async (data) => {
		// console.log(data);
		const { Email, password, userName } = data;
		const updateNameImgres = await dispatch(updateData(userName));
		const updateemailRes = await dispatch(updateemail(Email));
		const updatePassress = await dispatch(updatepassword(password));

		console.log('name ad picres', updateNameImgres);
		console.log('email', updateemailRes);
		console.log('passwod', updatePassress);
		console.log('submut');
		if (updateemailRes.res) {
			alert('login again');
			dispatch({ type: 'LOG OUT' });
		} else {
			alert('email change error try again');
		}
	};
	return (
		<div className={classes.root}>
			<h5 className={classes.userHeading}>User Profile Information</h5>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={classes.userParentDiv}>
					<div className="d-flex  w-25">
						<button onClick={editMode} style={{ background: 'none' }}>
							{editCredentials ? <CancelIcon /> : <EditIcon />}
						</button>
					</div>
					<div className="d-flex justify-content-center">
						<Avatar alt="user image" src={userData.userPhoto} className={classes.userImage} />
					</div>
					<br />
					<p>
						Username: <br />
						{editCredentials ? (
							<input type="text" {...register('userName', {})} placeholder={userData.userName} />
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
									required: 'Email is Required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: 'Enter Valid Email'
									}
								})}
								autoComplete="off"
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
									required: 'Password Required',
									minLength: { value: 5, message: 'Password must be greater than 5' },
									maxLength: { value: 15, message: 'Password must be less than 15' }
								})}
							/>
						) : null}
					</p>
					<br />
					{editCredentials ? <button>Submit</button> : null}
				</div>
			</form>
			<div className="d-flex justify-content-center mt-4 ">
				<Button variant="contained" color="primary" size="medium" onClick={goBack} className={classes.goBckBtn}>
					Go Back
				</Button>
			</div>
		</div>
	);
};
export default Profile;
