import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		height: '100vh'
	},
	userParentDiv: {
		width: '20%',
		height: '350px',
		border: '1px solid #e0e0e0',
		margin: 'auto',
		textAlign: 'center',
		padding: '20px',
		[theme.breakpoints.down('600')]: {
			width: '60%'
		}
	},
	userImg: {
		width: '130px',
		height: '130px',
		borderRadius: '50%',
		margin: '5px 0px',
		[theme.breakpoints.down('600')]: {
			width: '100px',
			height: '100px'
		}
	},
	userHeading: {
		textAlign: 'center',
		margin: '0px 0px 20px 0px'
	},
	username: {
		textAlign: 'start',

		margin: '20px 0px'
	},
	userEmail: {
		textAlign: 'start',

		margin: '30px 0px'
	}
}));
