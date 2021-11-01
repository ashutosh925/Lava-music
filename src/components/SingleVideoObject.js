import React from 'react';
import { useStyles } from './Styles';

const PlaylistOne = (props) => {
	const classes = useStyles();
	const imageStyles = {
		width: '75px',
		height: '72px',
		margin: '1px'
	};
	return (
		<div>
			<div className="d-flex w-100">
				<div className="d-flex flex-column justify-content-center me-2">
					{props.playBtn}
					<br />
					{props.shareBtn}
				</div>
				<div className="d-flex flex-wrap " style={{ width: '40%' }}>
					{props.images &&
						props.images.map((images, idx) => {
							return (
								<div key={idx}>
									<img src={images} alt="first-img" style={{ ...imageStyles }} key={idx} />
								</div>
							);
						})}
				</div>
				<div className={classes.playlistTitles}>
					<h5>PlayList: {props.playlist}</h5>
					<h5>User: {props.user}</h5>
					<h5>Channel:{props.channel}</h5>
					<h5>Category:{props.category}</h5>
					<h5>Total Runtime:{props.totalRuntime}</h5>
					<h5>Plays: {props.plays}</h5>
				</div>
			</div>
		</div>
	);
};

export default React.memo(PlaylistOne);
