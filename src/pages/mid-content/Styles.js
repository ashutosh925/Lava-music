import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		width: '90%',
		margin: '0px auto'
	},
	buttonStyleRemove: {
		background: 'transparent',
		border: 'none',
		lineHeight: '16px !important',
		color: '#e4e3e3',
		margin: '1px'
	},
	userUploadRoot: {
		// margin: '10px 0px'
	},
	userUploadParentDiv: {
		border: '1px solid white',
		padding: '10px 10px',
		background: '#00000040',
		height: '290px',
		margin: '14px  auto 0px auto',
		width: '90%',
		overflowY: 'auto !important',
		'&::-webkit-scrollbar': {
			width: '6px',
			height: ' 6px'
		},
		'&::-webkit-scrollbar-track': {
			borderRadius: ' 10px',
			background: 'rgba(224, 224, 224, 0.425)'
		},
		'&::-webkit-scrollbar-thumb': {
			borderRadius: '10px',
			background: ' rgba(80, 17, 17, 0.658)'
		},
		'&::-webkit-scrollbar-thumb:hover': {
			background: 'rgba(0, 0, 0, 0.4)'
		},
		'&::-webkit-scrollbar-thumb:active': {
			background: 'rgba(0, 0, 0, .9)'
		}
	},

	inputSearch: {
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
	}
}));
