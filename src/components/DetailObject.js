import React from 'react';
//material ui imports
import Grid from '@material-ui/core/Grid';
//files import
import { useStyles } from './Styles';
import thumbnail from '../assets/videothumb1.jpg';
const DetailObject = (props) => {
	const classes = useStyles();

	const formatViews = (n) => {
		if (n < 1e3) return n;
		if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
		if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
		if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
		if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
	};
	return (
		<div className={classes.objectParent}>
			<div className="mt-2 mb">
				<Grid container justifyContent="center">
					<Grid item xs={7} sm={3} md={5} lg={5}>
						<div>
							<img src={thumbnail} alt="thumbnail" className={classes.videoThumbnail} />
						</div>
					</Grid>
					<Grid item xs={7} sm={6} md={5} lg={5}>
						<div className={classes.videoTitles}>
							<h1 className={classes.mainTitle}>
								Java OOPs Concepts in just 60 minutes | Object Oriented Programming | Java Tutorial For
								Beginners
							</h1>
							<h1 className={classes.views}>Views: {formatViews(1500)} </h1>
							<h1>Category:</h1>
							<h1>Playtime:</h1>
						</div>
					</Grid>
					<Grid item xs={2} sm={1} md={1} lg={2}>
						<div className="ms-1 d-flex flex-column">
							<button className={classes.arrowBtn} onClick={props.event}>
								{props.arrowUpIcon}
							</button>
							<button className={classes.arrowBtn} onClick={props.event}>
								{props.playBtn}
							</button>
							<button className={classes.arrowBtn} onClick={props.event}>
								{props.removeBtn}
							</button>
							<button className={classes.arrowBtn} onClick={props.event}>
								{props.arrowDown}
							</button>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
export default DetailObject;
