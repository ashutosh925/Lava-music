import React from 'react';
//material ui imports
import PublishIcon from '@material-ui/icons/Publish';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
//files import
import { useStyles } from './Styles';
import thumbnail from '../../assets/videothumb1.jpg';
import EditListButtons from '../../components/PlayerButtons';
import SingleVideo from '../../components/SingleVideo';

const UserUpload = () => {
	const classes = useStyles();
	const button1 = (
		<button className={classes.buttonStyleRemove} onClick={() => console.log('share')}>
			<PlayCircleOutlineIcon />
		</button>
	);
	const button2 = (
		<button className={classes.buttonStyleRemove} onClick={() => console.log('upload')}>
			<AddIcon />
		</button>
	);
	const singleVideoProps = {
		icon1: button1,
		icon2: button2,
		title: 'oops in one video',
		User: 'unknown',
		Channel: 1,
		category: 'animals',
		playtime: 190,
		views: 170000,
		img: thumbnail
	};
	const buttonProps = {
		fontSize: '13px',
		padding: '5px 8px',
		margin: '0px 4px'
	};
	return (
		<div className={classes.userUploadRoot}>
			<h5 className="text-center">User Upload</h5>
			<div className="d-flex justify-content-evenly">
				<button className={classes.buttonStyleRemove} onClick={() => console.log('upload video')}>
					<EditListButtons icon={<PublishIcon />} {...buttonProps} text="Upload Video" />
				</button>
				<button className={classes.buttonStyleRemove} onClick={() => console.log('record video')}>
					<EditListButtons icon={<FiberManualRecordIcon />} {...buttonProps} text="Record Video" />
				</button>
			</div>
			<div className={classes.userUploadParentDiv}>
				<div className="mt-2 mb-2">
					<SingleVideo {...singleVideoProps} />
					<SingleVideo {...singleVideoProps} />
					<SingleVideo {...singleVideoProps} />
					<SingleVideo {...singleVideoProps} />
					<SingleVideo {...singleVideoProps} />
				</div>
			</div>
		</div>
	);
};

export default React.memo(UserUpload);
