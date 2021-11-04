import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		width: '100%',
		'& h5': {
			textAlign: 'center'
		},
		height: '100vh'
	},
	formParent: {
		margin: ' 5% auto',
		border: '1px solid white',
		width: '35%'
	},
	inputSignup: {
		padding: '15px',
		textAlign: 'center',
		margin: 'auto',
		'& input': {
			width: '70%',
			height: '30px !important',
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
			margin: '20px 0px',
			color: '#FFFFFF'
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
	}
}));
