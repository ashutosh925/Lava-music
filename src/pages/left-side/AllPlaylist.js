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
import Actionbutton from '../../components/PlayerButtons';
import SingleVideo from '../../components/SingleVideoObject';

const AllPlaylist = () => {
	const classes = useStyles();
	const btnProps = {
		shareBtn: <ShareIcon onClick={() => console.log('share')} />,
		playBtn: <PlayCircleOutlineIcon onClick={() => console.log('play')} />,
		images: [ img1, img2, img3, img4 ]
	};
	return (
		<div>
			<h3 className={classes.allPlaylistHeading}>All PlayList</h3>
			<div className={classes.AllPlayListParent}>
				<div className={classes.playListFirstSection}>
					<PlaylistOne playlist={1} />
					<PlaylistOne playlist={2} />
					<SingleVideo />
				</div>
			</div>
		</div>
	);
};
export default React.memo(AllPlaylist);
//you can pass playlist first 4 images as props and icons with onclick event

const PlaylistOne = (props) => {
	const classes = useStyles();

	const imageStyles = {
		width: '75px',
		height: '72px',
		margin: '1px'
	};
	return (
		<div className={classes.playlist}>
			<div>
				<div className="d-flex w-100">
					<div className="d-flex flex-column justify-content-center me-2">
						<EditListButtons icon={<ShareIcon onClick={() => console.log('share')} />} />

						<br />
						<EditListButtons icon={<PlayCircleOutlineIcon onClick={() => console.log('play')} />} />
					</div>
					<div className="d-flex flex-wrap " style={{ width: '40%' }}>
						{[ img1, img2, img3, img4 ].map((images, idx) => {
							return (
								<div key={idx}>
									<img src={images} alt="first-img" style={{ ...imageStyles }} key={idx} />
								</div>
							);
						})}
					</div>
					<div className={classes.playlistTitles}>
						<h5>PlayList: {props.playlist}</h5>
						<h5>User: Unknown</h5>
						<h5>Channel:</h5>
						<h5>Category:</h5>
						<h5>Total Runtime:</h5>
						<h5>Plays: </h5>
					</div>
				</div>
			</div>
		</div>
	);
};
