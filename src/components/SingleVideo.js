import React from 'react';

//material ui imports
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

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
				<Grid container justifyContent="center" style={{ height: '120px' }}>
					<Grid item xs={1} sm={1} md={1} lg={1}>
						<div className="d-flex h-100 me-2 flex-column justify-content-evenly ">
							<div className={classes.singleVideoIcons}>
								<Tooltip title="PLAY" placement="top">
									{props?.icon1}
								</Tooltip>
							</div>

							<div className={classes.singleVideoIcons}>
								<Tooltip title="ADD TO PLAYLIST" placement="top">
									{props?.icon2}
								</Tooltip>
							</div>
						</div>
					</Grid>
					<Grid item xs={5} sm={5} md={4} lg={5}>
						<div style={{ width: '100%', height: '100%' }}>
							<img src={props?.img} alt="videoimage" className={classes.singleVidImg} />
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={6}>
						<div className={classes.singleViTitles}>
							<h5>Title: {props?.title}</h5>
							<h5>Channel: {props?.category}</h5>
							<h5>Published At : {props.publichDate}</h5>
							<h5>Views: {formatViews(props.views)}</h5>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
export default React.memo(SingleVideo);
