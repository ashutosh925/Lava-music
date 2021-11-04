import React from 'react';

//mateiral ui imports
import Grid from '@material-ui/core/Grid';
//files import

import { useStyles } from './Styles';
import Topbar from '../pages/topbar/Index';
import LeftSide from '../pages/left-side/Index';
import MidContent from '../pages/mid-content/Index';
import RightSideParent from '../pages/right-content/Index';

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
					<Grid item lg={3}>
						<RightSideParent />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
export default Container;
