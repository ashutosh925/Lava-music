import React, { useState } from 'react';
//material ui import
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
//files import
import { useStyles } from './Styles';
import youtube from '../../redux/actions/YoutubeAction';
import SingleVideoObject from '../../components/SingleVideo';
const YoutubeSearch = () => {
	const [ searchBar, setSearchBar ] = useState({ query: '' });
	const dispatch = useDispatch();
	const classes = useStyles();
	const youtubeResponse = useSelector((state) => state.utube.playlist);
	const handleChange = (event) => {
		setSearchBar({ query: event.target.value });
	};

	const searchQuery = () => {
		setSearchBar({ query: '' });
		if (searchBar.query !== '') {
			dispatch(youtube(searchBar));
		}
		console.log('check');
	};
	const playThisVid = (vidId) => {
		dispatch({ type: 'PLAY THIS', payload: vidId });
	};

	// youtube video base url https://www.youtube.com/watch?v=
	return (
		<div>
			<h5 className="text-center">Youtube Search</h5>
			<div className={classes.inputParent}>
				<div className="me-2">
					<button className={classes.buttonStyleRemove} onClick={() => searchQuery()}>
						<Tooltip title="Search" placement="top">
							<SearchIcon />
						</Tooltip>
					</button>
				</div>
				<input
					type="text"
					className={classes.inputSearch}
					placeholder="Search..."
					value={searchBar.query}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<div className={classes.youtubeRoot}>
				{youtubeResponse &&
					youtubeResponse.map((items, idx) => {
						return (
							<div key={idx}>
								<SingleVideoObject
									title={items.snippet.title}
									img={items.snippet.thumbnails.medium.url}
									category={items.snippet.channelTitle}
									icon1={
										<Tooltip title="Play" placement="top">
											<PlayCircleOutlineIcon
												onClick={() =>
													playThisVid(`https://www.youtube.com/watch?v=${items.id.videoId}`)}
											/>
										</Tooltip>
									}
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
