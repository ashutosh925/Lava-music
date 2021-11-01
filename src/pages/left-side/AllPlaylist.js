import React, { useState } from 'react';
//material ui imports

import ShareIcon from '@material-ui/icons/Share';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

//files import
import { useStyles } from './Styles';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

const AllPlaylist = () => {
	const classes = useStyles();
	return (
		<div>
			<h3 className={classes.allPlaylistHeading}>All PlayList</h3>
			<div className={classes.AllPlayListParent}>
				<div className={classes.playListFirstSection}>
					<PlaylistOne />
					<PlaylistOne />
					<PlaylistOne />
				</div>
			</div>
		</div>
	);
};
export default AllPlaylist;
//you can pass playlist first 4 images as props and icons with onclick event

const PlaylistOne = () => {
	const classes = useStyles();
	const [ state, setState ] = useState({ imageLoadError: false });
	const imageStyles = {
		width: '75px',
		height: '72px',
		margin: '1px 2px'
	};
	return (
		<div className={classes.playlist}>
			<div>
				<div className="d-flex w-100">
					<div className="d-flex flex-column justify-content-center me-2">
						<ShareIcon />
						<br />
						<PlayCircleOutlineIcon />
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
						<h5>PlayList: 1</h5>
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
