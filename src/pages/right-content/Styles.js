import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		height: '100%'
	},
	//youtube component

	inputParent: {
		display: 'flex',
		width: '80%',
		margin: '10px auto'
	},
	inputSearch: {
		height: '30px !important',
		width: '90%',
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
	buttonStyleRemove: {
		background: 'transparent',
		border: 'none',
		lineHeight: '16px !important',
		color: '#e4e3e3',
		margin: '1px'
	},
	//youtube component
	youtubeRoot: {
		height: '300px',
		margin: '0px 0px 10px 0px',
		overflowY: 'auto !important'
	},

	// vimeoRoot

	vimeoRoot: {
		height: '400px',
		margin: '10px 0px'
	},
	vimeoVideosShow: {
		height: '320px',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		margin: '20px 0px 0px 0px',
		overflowY: 'auto !important'
	}
}));
