import React from 'react';
//material ui import
import SearchIcon from '@material-ui/icons/Search';

//files import
import { useStyles } from './Styles';
const YoutubeSearch = () => {
	const classes = useStyles();

	return (
		<div className={classes.youtubeRoot}>
			<h5 className="text-center">Youtube Search</h5>
			<div className={classes.inputParent}>
				<div className="me-2">
					<button className={classes.buttonStyleRemove}>
						<SearchIcon />
					</button>
				</div>
				<input type="text" className={classes.inputSearch} placeholder="" />
			</div>
		</div>
	);
};
export default React.memo(YoutubeSearch);
