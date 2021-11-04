import React from 'react';
//file import
import { useStyles } from './Styles';
import YoutubeSearch from './YoutubeSearch';
import VimeoSearch from './VimeoSearch';
const RightSideParent = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<YoutubeSearch />
			<VimeoSearch />
		</div>
	);
};
export default React.memo(RightSideParent);
