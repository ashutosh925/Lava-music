import React from 'react';
import Topbar from '../pages/topbar/Index';
import LeftSide from '../pages/left-side/Index';
import MidContent from '../pages/mid-content/Index';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './Styles';

const Container = () => {
	const classes = useStyles();
	return (
		<div>
			<Topbar />
			<div className={classes.root}>
				<Grid container>
					<Grid item lg={4}>
						<LeftSide />
					</Grid>
					<Grid item lg={5}>
						<MidContent />
					</Grid>
					<Grid item lg={3} style={{ background: 'orange' }}>
						<h1>right side</h1>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
export default Container;
