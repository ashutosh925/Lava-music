import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		margin: 'auto',
		padding: '5px 5px !important'
	},
	editPlaylist: {
		fontSize: '17px',
		margin: '10px 0px 10px 10px'
	},

	//playlist component
	PlayListRoot: {
		margin: '0px auto'
	},
	player: {
		height: '350px',
		padding: '2px',
		overflowY: 'auto !important',
		'&::-webkit-scrollbar': {
			width: '8px',
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
	// all playlist

	AllPlayListParent: {
		padding: '5px'
	},
	// all playlist
	allPlaylistHeading: {
		fontSize: '20px',
		color: '#FFFFFF',
		textAlign: 'center',
		letterSpacing: '2px'
	},
	playListFirstSection: {
		height: '360px',
		margin: '10px 0px',
		overflowY: 'auto !important',
		'&::-webkit-scrollbar': {
			width: '8px',
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

	playlist: {
		margin: '10px 0px',
		padding: '2px'
	},
	playlistTitles: {
		'& h5': {
			fontSize: '12px',
			margin: '8px 3px !important'
		}
	}
}));
