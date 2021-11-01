import React from 'react';
// material ui imports
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core/';
// files import
import { ReactComponent as Tvlogo } from '../../assets/svg/tvsvg.svg';
import { useStyles } from './Styles';
import user1 from '../../assets/user1.jpg';
const Topbar = () => {
	const classes = useStyles();
	const logout = () => {
		console.log('user logged out');
	};
	return (
		<div className={classes.root}>
			<AppBar position="static" color="transparent" className={classes.appbarParent}>
				<Grid container justifyContent="space-between">
					<Grid item xs={12} sm={4} md={4} lg={4}>
						<div className="d-flex h-100 justify-content-center align-items-center">
							<a href="asdasd" onClick={(e) => e.preventDefault()}>
								<Tvlogo width="30px" height="30px" />
							</a>
						</div>
					</Grid>
					<Grid item xs={12} sm={4} md={4} lg={4}>
						<div className="d-flex h-100 justify-content-center align-items-center mt-sm-n3 ">
							<h3 className={classes.logo}>LOGO</h3>
						</div>
					</Grid>
					<Grid item xs={12} sm={4} md={4} lg={4}>
						<div className="d-flex justify-content-end  h-100 align-items-center">
							<div className="d-flex h-100  align-items-center">
								<h5 className={classes.userName}>username</h5>
								<Avatar alt="user image" src={user1} className={classes.userImage} />

								<Button disableRipple style={{ color: '#d1d1d1' }} onClick={logout}>
									<ExitToAppIcon fontSize="medium" />
								</Button>
							</div>
						</div>
					</Grid>
				</Grid>
			</AppBar>
		</div>
	);
};
export default Topbar;
