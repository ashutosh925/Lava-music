import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((props) => ({
	objectParent: {
		margin: '10px 0px',
		'& h1': {
			fontSize: '11px',
			margin: '3px 3px !important'
		}
	},

	videoThumbnail: {
		width: '100%',
		height: '110px'
	},
	mainTitle: {
		fontSize: '11px'
	},

	arrowBtn: {
		background: 'transparent',
		border: 'none',
		color: '#e4e3e3',
		margin: '1px !important'
	},

	//player action buttons

	addPlaylistButton: {
		background: 'transparent',
		border: 'none',
		lineHeight: '16px !important',
		color: '#e4e3e3'
	},
	newPlayList: (props) => ({
		fontSize: props.fontSize,
		background: '#5a585899',
		margin: props.margin,
		// lineHeight: '22px',
		height: props.height,
		padding: props.padding
	})
}));
