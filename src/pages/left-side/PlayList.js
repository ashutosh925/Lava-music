import React from 'react';
//material ui imports
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RemoveIcon from '@material-ui/icons/Remove';
//files import
import { useStyles } from './Styles';
import VideoDetails from '../../components/DetailObject';
import PlayerButtons from '../../components/PlayerButtons';
const PlayList = () => {
	const classes = useStyles();
	const buttonProps = {
		fontSize: '12px',
		padding: '3px 8px',
		margin: '0px 4px'
	};
	const videoDetailsProps = {
		arrowUpIcon: <ArrowUpwardIcon fontSize="small" onClick={() => console.log('up')} />,
		playBtn: <PlayCircleOutlineIcon fontSize="small" onClick={() => console.log('play')} />,
		removeBtn: <RemoveIcon fontSize="small" onClick={() => console.log('remove')} />,
		arrowDown: <ArrowDownwardIcon fontSize="small" onClick={() => console.log('down')} />
	};
	return (
		<div className={classes.PlayListRoot}>
			<div className={classes.player}>
				{[ 1, 2, 3, 4, 5 ] &&
					[ 1, 2, 3, 4, 5 ].map((idx) => {
						return <VideoDetails {...videoDetailsProps} key={idx} />;
					})}
			</div>
			<div className="d-flex w-100 mt-4 justify-content-evenly">
				<PlayerButtons
					text="Share Playlist"
					icon={<ShareIcon fontSize="small" onClick={() => console.log('Share')} />}
					{...buttonProps}
				/>
				<PlayerButtons
					text="Delete Playlist"
					icon={<DeleteIcon fontSize="small" onClick={() => console.log('delete playlist')} />}
					{...buttonProps}
				/>
				<PlayerButtons
					text="Save Playlist"
					icon={<SaveAltIcon fontSize="small" onClick={() => console.log('Save Playlist')} />}
					{...buttonProps}
				/>
			</div>
		</div>
	);
};
export default React.memo(PlayList);
