import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		height: '100vh',
		padding: '30px 0px'
	},
	userParentDiv: {
		margin: '70px auto 0px auto',
		width: '30%',

		border: '1px solid #e0e0e0',
		textAlign: 'center',
		padding: '10px 20px',
		[theme.breakpoints.down('800')]: {
			width: '50%'
		},
		[theme.breakpoints.down('600')]: {
			width: '60%'
		},
		'& input': {
			height: '30px !important',
			width: '80%',
			border: 'none',
			padding: '5px 10px',
			background: '#5a585899',
			color: 'white',
			'&::placeholder': {
				textOverflow: 'ellipsis !important',
				color: 'white'
			},
			'&:hover,&:focus': {
				outline: 'none !important'
			}
		},
		'& button': {
			height: '33px',
			width: '120px',
			border: 'none',
			background: '#5a585899',
			margin: '15px 0px',
			color: '#FFFFFF',
			[theme.breakpoints.down('500')]: {
				height: '30px',
				width: '100px'
			}
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
		margin: '10px 0px'
	},
	imageUploadInput: {
		width: '60% !important',
		fontSize: '13px',
		background: 'transparent !important',
		[theme.breakpoints.down('600')]: {
			height: '27px',
			width: '100% !important',
			margin: '0px 0px 0px 0px',
			fontSize: '12px'
		},
		"&:input[type='file']": {
			color: 'yellow',
			fontSize: '100px !important'
		}
	},
	userImage: {
		width: '100px',
		height: '100px'
	}
}));
