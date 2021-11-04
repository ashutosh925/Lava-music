import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	objectParent: {
		margin: '10px 0px',
		'& h1': {
			fontSize: '11px',
			margin: '3px 3px !important'
		},
		[theme.breakpoints.down('600')]: {
			margin: '10px 3px !important',
			border: '1px solid white',
			padding: '2px'
		}
	},

	videoThumbnail: {
		width: '100%',
		height: '110px'
	},
	mainTitle: {
		fontSize: '11px'
	},
	videoTitles: {
		margin: '0px 5px !important',
		'& h1': {
			[theme.breakpoints.down('500')]: {
				margin: '6px 0px !important'
			}
		}
	},
	arrowBtn: {
		background: 'transparent',
		border: 'none',
		color: '#e4e3e3',
		margin: '0px !important',
		[theme.breakpoints.down('500')]: {
			margin: '0px !important'
		}
	},

	//player action buttons

	addPlaylistButton: {
		background: 'transparent',
		border: 'none',
		lineHeight: '16px !important',
		color: '#e4e3e3'
	},

	//player button

	BtnText: (props) => ({
		fontSize: props.fontSize,
		background: '#5a585899',
		margin: props.margin,
		// lineHeight: '22px',
		height: props.height,
		padding: props.padding,
		width: props.width,
		textAlign: 'center'
	}),
	actionBtns: {
		// margin: '10px 10px'
	},

	//playlist  object

	playlistTitles: {
		'& h5': {
			fontSize: '12px',
			margin: '4px 5px !important'
		},
		[theme.breakpoints.down('500')]: {
			margin: 'auto  5px !important'
		}
	},

	playListImgs: {
		width: '60px',
		height: '65px',
		margin: '1px',
		[theme.breakpoints.down('500')]: {
			width: '40px',
			height: '45px'
		}
	},
	imagesParent: {
		width: '35%',
		[theme.breakpoints.down('500')]: {
			width: '37%'
		}
	},
	//single video component
	SingleVideoParnt: {
		padding: '5px',
		margin: '10px 0px'
	},

	singleVidContainer: {
		// height: '100px',
		width: '100%',
		display: 'flex',
		alignItems: 'center'
	},
	singleImgDiv: {
		width: '20ppx',
		height: '20ppx'
	},
	singleVidImgParent: {
		width: '100%',

		textAlign: 'center'
	},
	singleVidImg: {
		height: '100px',
		width: '100%'
	},
	singleViTitles: {
		'& h5': {
			fontSize: '12px',
			margin: '7px 5px !important'
		},
		[theme.breakpoints.down('600')]: {
			margin: 'auto  5px !important',
			textAlign: 'center'
		}
	}
}));
