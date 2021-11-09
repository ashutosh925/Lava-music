import React, { useState, useEffect } from 'react';
// material ui imports
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core';
// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// files import
import { ReactComponent as Tvlogo } from '../../assets/svg/tvsvg.svg';
import { useStyles } from './Styles';
import user1 from '../../assets/user1.jpg';
import { signout } from '../../redux/actions/Authentication';
const Topbar = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();
	const userData = useSelector((state) => state.auth);
	useEffect(() => {}, []);
	const logout = async () => {
		dispatch({ type: 'LOG OUT' });
		history.push('/');
		const response = await dispatch(signout());
		history.push('/');
	};
	const profileVisit = () => {
		history.push('/user-profile');
	};
	console.log(userData);
	return (
		<div className={classes.root}>
			<AppBar position="sticky" color="transparent" className={classes.appbarParent}>
				<Grid container>
					<Grid item xs={12} sm={4} md={4} lg={4}>
						<div className="d-flex h-100 justify-content-center align-items-center">
							<a href="asdasd" onClick={(e) => e.preventDefault()}>
								<Tvlogo className={classes.tvLogo} />
							</a>
						</div>
					</Grid>
					<Grid item xs={6} sm={3} md={4} lg={4}>
						<div className="d-flex h-100 justify-content-center align-items-center mt-n2 ">
							<h3 className={classes.logo}>LOGO</h3>
						</div>
					</Grid>
					<Grid item xs={6} sm={4} md={4} lg={4}>
						<div className="d-flex justify-content-end align-items-center">
							<div className="d-flex h-100 align-items-center">
								<Button onClick={profileVisit}>
									<h5 className={classes.userName}>{userData.userName}</h5>
									<Avatar alt="user image" src={userData.userPhoto} className={classes.userImage} />
								</Button>
								<button
									style={{ color: '#d1d1d1', border: 'none', background: 'none' }}
									onClick={logout}
								>
									<ExitToAppIcon fontSize="large" />
								</button>
							</div>
						</div>
					</Grid>
				</Grid>
			</AppBar>
		</div>
	);
};
export default Topbar;
