import React from 'react';

//mateiral ui imports
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

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
			<br />
			<Hidden only={[ 'xs', 'sm', 'md' ]}>
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
			</Hidden>

			<Hidden only={[ 'lg', 'xl' ]}>
				<div className={classes.root2}>
					<Grid container justifyContent="center">
						<Grid item sm={12} md={7}>
							<MidContent />
						</Grid>
						<Grid item sm={8} md={5}>
							<RightSideParent />
						</Grid>

						<Grid item sm={12} md={6}>
							<LeftSide />
						</Grid>
					</Grid>
				</div>
			</Hidden>
		</div>
	);
};
export default Container;
