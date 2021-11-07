import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme, props) => ({
	root: {
		margin: '0px 0px 25px 0px',
		backgroundColor: '#00000052'
	},
	appbarParent: {
		padding: '10px 10px !important'
	},
	userName: {
		color: '#d1d1d1',
		[theme.breakpoints.down('500')]: {
			fontSize: '13px'
		}
	},
	userImage: {
		width: '30px',
		height: '30px',
		margin: '0px 15px !important',
		[theme.breakpoints.down('500')]: {
			width: '25px',
			height: '25px',
			margin: '0px 5px !important'
		}
	},
	logo: {
		color: '#d1d1d1',
		[theme.breakpoints.down('500')]: {
			fontSize: '15px'
		}
	},
	tvLogo: {
		width: '30px',
		height: '30px',
		[theme.breakpoints.down('500')]: {
			width: '25px',
			height: '25px'
		}
	},
	alertMsg: {
		width: '30%',
		margin: 'auto',
		position: 'fixed',
		top: 50,
		left: 50,
		right: 50
	}
}));
