import React from 'react';
import ReactPlayer from 'react-player';

//files import
import { useStyles } from './Styles';
import video1 from '../../assets/songs.mp4';
const MidContent = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className="text-center">
				<ReactPlayer url={video1} loop playing={false} controls width="95%" />
			</div>
		</div>
	);
};
export default React.memo(MidContent);
// player callback

// 					onPlay={() => console.log('play')}
// 					onStart={() => console.log('start')}
// 					onProgress={(e) =>videoDuration(e)}
// 					onDuration={() => console.log('duration')}
// 					onPause={() => console.log('on pause')}
// 					onBuffer={() => console.log('onBuffer')}
// 					onBufferEnd={() => console.log('onBufferEnd')}
// 					onSeek={() => console.log('onSeek')}
// 					onEnded={() => console.log('onEnded')}
// 					onError={() => console.log('onError')}
// 					onClickPreview={() => console.log('onClickPreview')}
// 					onEnablePIP={() => console.log('onEnablePIP')}
// 					onDisablePIP={() => console.log('onDisablePIP')}
