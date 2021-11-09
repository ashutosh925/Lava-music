import React from 'react';
import Alert from '@material-ui/lab/Alert';

import { useStyles } from './Styles';
const Alertmsg = (props) => {
	const classes = useStyles();
	return (
		<div>
			<Alert severity={props.variant} className={classes.alertMsg}>
				{props.msg}
			</Alert>
		</div>
	);
};
export default Alertmsg;
