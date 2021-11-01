import React from 'react';
import ReactPlayer from 'react-player';
//material ui imports
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import TimerIcon from '@material-ui/icons/Timer';
import DashboardIcon from '@material-ui/icons/Dashboard';
//files import
import { useStyles } from './Styles';
import video1 from '../../assets/songs.mp4';
import ActionButton from '../../components/PlayerButtons';
import UserUpload from './UserUpload';
const buttonProps = {
	icon: <ShareIcon onClick={() => console.log('share')} />,
	fontSize: '13px',
	padding: '4px 4px',
	margin: '0px 4px',
	width: '130px'
};
const actionBtns = [
	{
		text: 'Randomize Playlist',
		event: () => console.log('share'),
		icon: <DashboardIcon />
	},
	{
		text: 'Search All Video',
		event: () => console.log('search'),
		icon: <SearchIcon />
	},
	{
		text: 'Loop Playlist',
		event: () => console.log('loop play'),
		icon: <AllInclusiveIcon />
	},
	{
		text: 'Playlist Runtime',
		event: () => console.log('playtime runtime'),
		icon: <TimerIcon />
	}
];
const MidContent = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className="border ">
				<ReactPlayer url={video1} loop playing={false} controls width="95%" />
			</div>
			<div className=" d-flex flex-wrap justify-content-evenly mt-2 p-2">
				{actionBtns &&
					actionBtns.map((btns, idx) => {
						return (
							<div className="m-1" key={idx}>
								<button onClick={btns.event} className={classes.buttonStyleRemove}>
									<ActionButton text={btns.text} {...buttonProps} icon={btns.icon} />
								</button>
							</div>
						);
					})}
			</div>
			<div>
				<UserUpload />
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
