import React from 'react';
import { useStyles } from './Styles';

const PlaylistOne = (props) => {
	const classes = useStyles();

	return (
		<div>
			<div className="d-flex w-100 mt-2 mb-2">
				<div className="d-flex flex-column justify-content-center me-2">
					<button className={classes.addPlaylistButton}>{props.shareBtn}</button>
					<br />
					<button className={classes.addPlaylistButton}>{props.playBtn}</button>
				</div>
				<div className={`d-flex justify-content-center flex-wrap ${classes.imagesParent}`}>
					{props.images &&
						props.images.map((imgList, idx) => {
							return <img src={imgList} alt="first-img" key={idx} className={classes.singleVideoImgs} />;
						})}
				</div>
				<div className={classes.playlistTitles}>
					<h5>PlayList: {props.Playlist}</h5>
					<h5>User: {props.User}</h5>
					<h5>Channel: {props.Channel}</h5>
					<h5>Category: {props.Category}</h5>
					<h5>Total Runtime: {props.TotalRuntime}</h5>
					<h5>Plays: {props.Plays}</h5>
				</div>
			</div>
		</div>
	);
};

export default React.memo(PlaylistOne);
