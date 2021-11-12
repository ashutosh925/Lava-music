import React, { useState } from 'react';
import ReactPlayer from 'react-player';
//material ui imports
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import TimerIcon from '@material-ui/icons/Timer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ClearIcon from '@material-ui/icons/Clear';

//hooks import
import { useSelector } from 'react-redux';
//files import
import { useStyles } from './Styles';
import ActionButton from '../../components/PlayerButtons';
import UserUpload from './UserUpload';
import InputSearch from './InputSearch';
const buttonProps = {
	icon: <ShareIcon onClick={() => console.log('share')} />,
	fontSize: '13px',
	padding: '4px 4px',
	margin: '0px 4px',
	width: '160px'
};

const MidContent = () => {
	const [ inputFieldState, setinputFieldState ] = useState(false);
	const [ nextVideo, setNextVideo ] = useState(
		{ count: 0 },
		{
			videoref: ''
		}
	);
	const classes = useStyles();
	const youtubeVIdeo = useSelector((state) => state.utube?.utubeVideoPlay);

	const actionBtns = [
		{
			text: 'Randomize Playlist',
			event: () => console.log('share'),
			icon: <DashboardIcon />,
			inputField: <InputSearch />
		},
		{
			text: inputFieldState ? <InputSearch /> : 'Search All Video',
			event: inputFieldState ? null : () => inputFieldToggle(),
			icon: inputFieldState ? <ClearIcon onClick={() => setinputFieldState(false)} /> : <SearchIcon />,
			width: '160px'
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
	const inputFieldToggle = () => {
		setinputFieldState(true);
		console.log('togling', inputFieldState);
	};
	// 578385979
	// console.log(youtubeVIdeo[0]);
	const utubeUrl="https://www.youtube.com/"
	return (
		<div className={classes.root}>
			<div className="border m-auto "> 
				 <ReactPlayer  url={youtubeVIdeo === '' ? utubeUrl : youtubeVIdeo } width="100%" controls /> 
				 {/* <ReactPlayer  url={"https://vimeo.com/514599809"} width="100%" controls /> */}
				
			</div>
			<div className=" d-flex flex-wrap justify-content-evenly mt-2 p-2">
				{actionBtns &&
					actionBtns.map((btns, idx) => {
						return (
							<div className="m-1" key={idx}>
								<button onClick={btns.event} className={classes.buttonStyleRemove}>
									<ActionButton
										text={btns.text}
										{...buttonProps}
										icon={btns.icon}
										width={btns.width}
									/>
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
