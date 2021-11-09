import React, { useState } from 'react';
import Moment from 'react-moment';
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
import SingleVideoObject from '../../components/SingleVideo';

import { useStyles } from './Styles';
const YoutubeSearch = () => {
	const classes = useStyles();
	const [ searchBar, setSearchBar ] = useState({ query: '' });
	const dispatch = useDispatch();
	const vimeoData = useSelector((state) => state.vimeo.respononseResults.data);
	const handleChange = (event) => {
		setSearchBar({ query: event.target.value });
	};
	const handlekeyDown = async (key) => {
		if (key.keyCode === 13) {
			if (searchBar.query !== '') {
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
	};
	console.log(vimeoData);
	// console.log(state[0].pictures.sizes[4].link);
	// console.log(state[0].uri);
	// console.log(state[0].name);
	// console.log(vimeoData[0].tags[0].name);
	// console.log(vimeoData[0].tags[2].name);

	// console.log(maps);
	// items.pictures.sizes[6].link
	// items.uri
	// items?.name
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
				{vimeoData &&
					vimeoData.map((items, index) => {
						return (
							<div>
								<VimeoVideos
									img={items.pictures.sizes[4].link}
									title={items.name}
									duration={items.duration}
									subtitle2={items.created_time}
									onClick={() => getVideo(items.uri)}
									icon1={<PlayCircleOutlineIcon />}
									icon2={<AddIcon />}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default React.memo(YoutubeSearch);
