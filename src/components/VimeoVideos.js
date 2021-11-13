import React from 'react';
import moment from 'react-moment';

//mateterial ui
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
//files import
import img from '../assets/2.jpg';

import { useStyles } from './Styles';
const VimeoVideos = (props) => {
	// console.log(Moment(props.subtitle2).format('dddd, MMMM Do YYYY, h:mm:ss a'));
	const classes = useStyles();
	function secondsToHms(d) {
		d = Number(d);
		var h = Math.floor(d / 3600);
		var m = Math.floor((d % 3600) / 60);
		var s = Math.floor((d % 3600) % 60);

		var hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : '';
		var mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : '';
		var sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : '';
		return hDisplay + mDisplay + sDisplay;
	}

	var date = new Date(props.subtitle2);
	date.toISOString().substring(0, 10);
	var dateString = date;
	dateString = new Date(dateString).toUTCString();
	dateString = dateString.split(' ').slice(0, 4).join(' ');

	return (
		<div className={classes.vimeoRoot}>
			<Grid container spacing={1} justifyContent="center">
				<Grid item xs={1} sm={1} md={1} lg={1}>
					<div className="d-flex flex-column justify-content-evenly w-100 h-100">
						<Tooltip title="PLAY" placement="top" className={classes.singleVideoIcons}>
							{props.icon1}
						</Tooltip>
						<Tooltip title="ADD TO PLAYLIST" placement="top" className={classes.singleVideoIcons}>
							{props.icon2}
						</Tooltip>
					</div>
				</Grid>
				<Grid item xs={5} sm={5} md={4} lg={5}>
					<div className="border">
						<img src={props.img} alt="igpic " style={{ width: '100%' }} />
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6}>
					<div className={classes.singleViTitles}>
						<h5>Title: {props.title}</h5>
						<h5>{props.subtitle}</h5>
						<h5>Published At : {dateString}</h5>
						<h5>Duration: {secondsToHms(props.duration)}</h5>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
export default VimeoVideos;
