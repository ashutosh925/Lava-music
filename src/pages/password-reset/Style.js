import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '30%',
		textAlign: 'center',
		height: '100vh',
		padding: '50px 0px',
		margin: 'auto',
		[theme.breakpoints.down('600')]: {
			width: '70%'
		}
	},
	resetPasswordDiv: {
		border: '1px solid white',
		textAlign: 'center',

		padding: '20px 0px',
		'& input': {
			height: '30px !important',
			width: '60%',
			border: 'none',
			padding: '5px 15px',

			background: '#5a585899',
			color: 'white',
			'&::placeholder': {
				textOverflow: 'ellipsis !important',
				color: 'white'
			},
			'&:hover,&:focus': {
				outline: 'none !important'
			}
		}
	},
	btns: {
		marginTop: '20px',
		borderRadius: '0px !important',
		height: '30px',
		width: '50%'
	},
	submitBtn: {
		padding: '5px 0px',
		background: '#5a585899',
		border: 'none',
		color: 'white',
		width: '150px',
		margin: '10px auto'
	}
}));
