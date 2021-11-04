import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './Styles';

const InputSearch = () => {
	const classes = useStyles();
	const inputSearchIcon = {
		lineHeight: '25px',
		background: '#5a585899'
	};
	return (
		<div>
			<div class="input-group" style={{ background: '#5a585899' }}>
				<input type="text" className={classes.inputSearch} placeholder="" />
				<div class="input-group-append">
					<button className={classes.buttonStyleRemove}>
						<span style={{ ...inputSearchIcon }}>
							<SearchIcon width="20px" height="20px" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};
export default React.memo(InputSearch);
