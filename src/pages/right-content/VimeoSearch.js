import React, { useState } from 'react';
//material ui import
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

//hooks
import { useSelector, useDispatch } from 'react-redux';

//files import
import vimeo from '../../redux/actions/VimeoAction';

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
	// console.log(vimeoData);
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
				{vimeoData &&
					vimeoData.map((items, idx) => {
						return (
							<div>
								<SingleVideoObject img={items.pictures.sizes[6].link}  title={items?.name} icon1=<AddIcon/> icon2=<AddIcon/> />
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default React.memo(YoutubeSearch);

	/* <SingleVideoObject title={items?.snippet?.title}
									img={items.snippet?.thumbnails?.high?.url}
									category={items?.snippet?.channelTitle}
									icon1={<PlayCircleOutlineIcon onClick={() => playThisVid(items?.id?.videoId)} />}
									icon2={<AddIcon onClick={()=>addToPlaylist(items?.id?.videoId)}/>}/>
					</div> */

