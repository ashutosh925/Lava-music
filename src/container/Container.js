import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import ResponsiveContainer from './ResponsiveContainer';
import LargeScreenContainer from './Index';
const Container = () => {
	return (
		<div>
			<Hidden only={[ 'md', 'lg', 'xl' ]}>
				<ResponsiveContainer />
			</Hidden>
			<Hidden only={[ 'xs', 'sm' ]}>
				<LargeScreenContainer />
			</Hidden>
		</div>
	);
};
export default Container;
