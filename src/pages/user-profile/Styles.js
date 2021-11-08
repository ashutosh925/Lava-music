import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		height: '100vh',
		padding: '30px 0px'
	},
	userParentDiv: {
		margin: '70px auto 0px auto',
		width: '25%',
		height: '350px',
		border: '1px solid #e0e0e0',

		textAlign: 'center',
		padding: '20px',
		[theme.breakpoints.down('600')]: {
			width: '60%'
		}
	},
	userImg: {
		width: '115px',
		height: '114px',
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
