import React from 'react';

//material ui imports
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
//hooks
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
//files imports
import { useStyles } from './Styles';
import user1 from '../../assets/defaultpic.png';

const Profile = () => {
	const classes = useStyles();
	const history = useHistory();
	const userData = useSelector((state) => state.auth);
	const [ errorImg, setErroImg ] = React.useState();
	const goBack = () => {
		history.push('/lavamusic');
	};
	const editProfile = (e) => {
		console.log(e.target.value, 'ss');
		if (e.target.value === undefined) {
			setErroImg(true);
		} else {
			setErroImg(false);
		}
	};
	console.log(userData);
	return (
		<div className={classes.root}>
			<h5 className={classes.userHeading}>User Profile Information</h5>
			<div className={classes.userParentDiv}>
				<div className="d-flex justify-content-end">
					<Button color="inherit" size="medium" onClick={editProfile}>
						<EditIcon />
					</Button>
				</div>
				<img
					src={errorImg ? user1 : userData.userPhoto}
					onError={editProfile}
					alt="Avatar"
					className={classes.userImg}
				/>
				<br />
				<p className={classes.username}>username: {userData.userName}</p>
				<p className={classes.userEmail}>Email: {userData.userEmail}</p>
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
