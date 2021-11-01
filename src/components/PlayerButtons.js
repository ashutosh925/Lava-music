import React from 'react';

//files import
import { useStyles } from './Styles';

const EditListButtons = (props) => {
	const classes = useStyles(props);

	return (
		<div className={classes.actionBtns}>
			<div className="d-flex align-items-center mt-1 mb-1">
				{props.icon}
				<h5 className={classes.BtnText}>{props.text}</h5>
			</div>
		</div>
	);
};
export default EditListButtons;
