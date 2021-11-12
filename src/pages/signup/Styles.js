import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		width: '100%',
		padding: '20px 0px 20px 0px',
		'& h5': {
			textAlign: 'center'
		},
		height: '100%'
	},
	formParent: {
		padding: '10px 0px',
		margin: ' 0px auto',
		border: '1px solid white',
		width: '30%',
		[theme.breakpoints.down('650')]: {
			width: '60%'
		}
	},
	inputSignup: {
		padding: '10px',
		textAlign: 'center',
		margin: 'auto',
		'& input': {
			width: '70%',
			border: 'none',
			padding: '2px 10px',
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
			height: '30px',
			width: '110px',
			border: 'none',
			background: '#5a585899',
			margin: '15px 0px',
			color: '#FFFFFF',
			[theme.breakpoints.down('600')]: {
				height: '27px',
				width: '70px'
			}
		}
	},
	errorMsg: {
		color: 'red'
	},
	ahref: {
		textDecoration: 'none',
		color: '#FFFFFF',
		'&:hover': {
			color: '#FFFFFF',
			cursor: 'pointer'
		}
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
	labels: {
		fontSize: '17px'
	},
	imgPreview: {
		width: '77px',
		height: '60px'
	}
}));
