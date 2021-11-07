import React from 'react';

//material ui imports
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
//hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//files imports
import { useStyles } from './Styles';
const Profile = () => {
	const classes = useStyles();
	const history = useHistory();
	const goBack = () => {
		history.push('/lavamusic');
	};
	const editProfile = () => {};
	return (
		<div className={classes.root}>
			<h5 className={classes.userHeading}>User Profile Information</h5>
			<div className={classes.userParentDiv}>
				<div className="d-flex justify-content-end">
					<Button color="inherit" size="medium" onClick={editProfile}>
						<EditIcon />
					</Button>
				</div>
				<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={classes.userImg} />
				<br />
				<p className={classes.username}>UserName:</p>
				<p className={classes.userEmail}>Email:</p>
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
