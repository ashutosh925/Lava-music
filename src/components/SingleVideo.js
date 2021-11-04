import React from 'react';

//material ui imports
import Grid from '@material-ui/core/Grid';

//files import
import { useStyles } from './Styles';

const SingleVideo = (props) => {
	const classes = useStyles();
	const formatViews = (n) => {
		if (n < 1e3) return n;
		if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
		if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
		if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
		if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
	};
	return (
		<div className={classes.SingleVideoParnt}>
			<div className={classes.singleVidContainer}>
				<Grid container justifyContent="center">
					<Grid item xs={1} sm={1} md={1} lg={1}>
						<div className="d-flex  h-100 me-2 flex-column justify-content-evenly ">
							<div>{props.icon1}</div>

							<div>{props.icon2}</div>
						</div>
					</Grid>
					<Grid item xs={10} sm={5} md={4} lg={5}>
						<div className={classes.singleVidImgParent}>
							<img src={props.img} alt="videoimage" className={classes.singleVidImg} />
						</div>
					</Grid>
					<Grid item xs={12} sm={5} md={6} lg={6}>
						<div className={classes.singleViTitles}>
							<h5>Title: {props.title}</h5>
							<h5 className={classes.views}>Views: {formatViews(props.views)} </h5>
							<h5>Category: {props.category}</h5>
							<h5>Playtime: {props.playtime}</h5>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
export default SingleVideo;
