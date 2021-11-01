import React from 'react';

//files import
import { useStyles } from './Styles';

const EditListButtons = (props) => {
	const classes = useStyles(props);

	return (
		<div>
			<div className="d-flex justify-content-evenly align-items-center mb-4">
				<div className="d-flex ">
					<button className={classes.addPlaylistButton}>{props.icon}</button>
					<h5 className={classes.newPlayList}>{props.text}</h5>
				</div>
			</div>
		</div>
	);
};
export default EditListButtons;
