import React from 'react';
import Moment from 'moment';
//material ui imports

import ShareIcon from '@material-ui/icons/Share';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
//hooks import

import { useSelector } from 'react-redux';
//files import
import { useStyles } from './Styles';
import {msToTime} from "../../utitils/DurationCalculator"
import SingleVideo from '../../components/PlayListObject';
const AllPlaylist = () => {
	const classes = useStyles();
	const youtubePlaylist = useSelector((state) => state.utube);
	const { responseResults, videoDuration, playlist } = youtubePlaylist;
	const img1=responseResults[0]?.snippet?.thumbnails?.high?.url
	const img2=responseResults[1]?.snippet?.thumbnails?.high?.url
	const img3=responseResults[2]?.snippet?.thumbnails?.high?.url
	const img4=responseResults[3]?.snippet?.thumbnails?.high?.url

	const singleVideoProps = {
		shareBtn: <ShareIcon onClick={() => console.log('share')} />,
		playBtn: <PlayCircleOutlineIcon onClick={() => console.log('play')} />,
		images: [ img1, img2, img3, img4 ],
		Playlist: 1,
		User: 'unknown',
		Channel: 1,
		Category: 'animals',
		TotalRuntime: 190,
		Plays: 'infinite'
	};
// console.log(Moment.duration(videoDuration[0]).asMilliseconds())
let duration=0
for(let seconds of videoDuration){
	duration= + Moment.duration(seconds).asMilliseconds()
	
}

	return (
		<div>
			<h3 className={classes.allPlaylistHeading}>All PlayList</h3>
			<div className={classes.AllPlayListParent}>
				<div className={classes.playListSection}>
					{/* {playlist &&
						playlist.map((items, idx) => {
							return (
								<div key={idx}>
									<SingleVideo Playlist="Youtube" />
								</div>
							);
						})} */}
					<SingleVideo {...singleVideoProps} />
					<SingleVideo {...singleVideoProps} />
					<SingleVideo {...singleVideoProps} />
				</div>
			</div>
		</div>
	);
};
export default React.memo(AllPlaylist);
//you can pass playlist first 4 images as props and icons with onclick event
