import React, { useState } from 'react';
import moment from 'react-moment';
//material ui import
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

//hooks
import { useSelector, useDispatch } from 'react-redux';

//files import
import vimeo from '../../redux/actions/VimeoAction';
import VimeoVideos from '../../components/VimeoVideos';

import { useStyles } from './Styles';
const YoutubeSearch = () => {
	const classes = useStyles();
	const [ searchBar, setSearchBar ] = useState({ query: '' });
	const dispatch = useDispatch();
	const vimeoData = useSelector((state) => state.vimeo.respononseResults);
	const handleChange = (event) => {
		setSearchBar({ query: event.target.value });
	};
	const handlekeyDown = async (key) => {
		if (key.keyCode === 13) {
			if (searchBar.query !== '') {
			const res = await dispatch(vimeo(searchBar));

				setSearchBar({ query: '' });
			}
		}
	};
	const searchQuery = async (evnt) => {
		if (searchBar.query !== '') {
			const res = await dispatch(vimeo(searchBar));
		}
		console.log('check');
	};
	const getVideo = (video) => {
		console.log(video);
		// const videoUrl = `https://vimeo.com${video}`;
		dispatch({ type: 'PLAY_THIS_SONG', payload: video });
	};
	///

	
	return (
		<div className={classes.vimeoRoot}>
			<h5 className="text-center">Vimeo Search</h5>
			<div className={classes.inputParent}>
				<div className="me-2">
					<Tooltip title="SEARCH" placement="top">
						<button className={classes.buttonStyleRemove} onClick={(evnt) => searchQuery(evnt)}>
							<SearchIcon />
						</button>
					</Tooltip>
				</div>
				<input
					type="text"
					className={classes.inputSearch}
					placeholder="Search..."
					onChange={(e) => handleChange(e)}
					onKeyDown={(key) => handlekeyDown(key)}
				/>
				<div />
			</div>

			<div className={classes.vimeoVideosShow}>
			{vimeoData?.data?.length === 0 ? <h5 className="text-center">No Videos Found</h5> :null }

				{vimeoData?.length === 0 ? (
					<h5 className="text-center">No Videos Found</h5>
				) : (
					vimeoData.data &&
					vimeoData.data.map((items, index) => {
						return (
							<div key={index}>
								<VimeoVideos
									img={items?.pictures?.sizes[4].link}
									title={items?.name}
									duration={items?.duration}
									subtitle2={items?.created_time}

									icon1={<PlayCircleOutlineIcon onClick={() => getVideo(items?.link)} />}
									icon2={<AddIcon />}
								/>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};
export default React.memo(YoutubeSearch);
