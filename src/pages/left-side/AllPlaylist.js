import React from 'react';

//material ui imports

import ShareIcon from '@material-ui/icons/Share';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

//files import
import { useStyles } from './Styles';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import SingleVideo from '../../components/SingleVideoObject';
const AllPlaylist = () => {
	const classes = useStyles();
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
	return (
		<div>
			<h3 className={classes.allPlaylistHeading}>All PlayList</h3>
			<div className={classes.AllPlayListParent}>
				<div className={classes.playListSection}>
					<SingleVideo {...singleVideoProps} />
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
