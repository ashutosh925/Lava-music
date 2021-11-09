import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		width: '100%',
		margin: 'auto',
		padding: '30px 0px 0px 0px',
		height: '100vh'
	},
	inputParentDiv: {
		width: '30%',
		margin: 'auto',
		textAlign: 'center',
		border: '1px solid white',
		[theme.breakpoints.down('700')]: {
			width: '60%'
		},
		'& h5': {
			margin: '20px 0px'
		},
		'& button': {
			height: '33px',
			width: '120px',
			border: 'none',
			background: '#5a585899',
			margin: '20px 0px',
			color: '#FFFFFF',
			[theme.breakpoints.down('500')]: {
				height: '30px',
				width: '100px'
			}
		}
	},
	inputSearch: {
		'& input': {
			height: '30px !important',
			width: '80%',
			border: 'none',
			padding: '5px 10px',
			margin: ' 0px 0px 10px 0px',
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
	divider: {
		'& h5': {
			width: '20%',
			margin: '20px auto',
			textAlign: 'center',
			zIndex: '999 !important',
			position: 'relative',
			'&::after': {
				content: '""',
				width: '100%',
				borderBottom: 'solid 1px #fff',
				position: 'absolute',
				left: 80,
				top: '50%',
				zIndex: 1,
				[theme.breakpoints.down('700')]: {
					left: 60
				}
			},
			'&::before': {
				content: '""',
				width: '100%',
				borderBottom: 'solid 1px #fff',
				position: 'absolute',
				right: 80,
				top: '50%',
				zIndex: 1,
				[theme.breakpoints.down('700')]: {
					right: 60
				}
			}
		}
	},
	resetpass: {
		textDecoration: 'none',
		color: 'white',
		'&:hover': {
			color: 'white'
		}
	}
}));
