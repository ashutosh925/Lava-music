import React from 'react';

//mateiral ui imports
import Grid from '@material-ui/core/Grid';

//files import

import LeftSide from '../pages/left-side/Index';
import MidContent from '../pages/mid-content/Index';
import RightSide from '../pages/right-content/Index';

const ResponsiveContainer = () => {
	return (
		<div>
			<Grid container justifyContent="center">
				<Grid item md={5} sm={6} lg={6}>
					<MidContent />
				</Grid>
				<Grid item md={5} sm={5} lg={5}>
					<RightSide />
				</Grid>
				<Grid item md={6} sm={8} lg={12}>
					<LeftSide />
				</Grid>
			</Grid>
		</div>
	);
};
export default ResponsiveContainer;
