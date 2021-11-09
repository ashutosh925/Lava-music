import React, { useState,useEffect } from 'react';
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
	const {respononseResults,playlist} = useSelector((state) => state.utube);

	const handleChange = (event) => {
		setSearchBar({ query: event.target.value });
	};
	const handlekeyDown = async (key) => {
		if (key.keyCode === 13) {
			if (searchBar.query !== '') {
				const res = await dispatch(youtube(searchBar));
				setSearchBar({ query: '' });
			}
		}
	};
	const searchQuery = async (evnt) => {
		if (searchBar.query !== '') {
			dispatch(youtube(searchBar));
		}
		console.log('check');
	};
	const playThisVid = (vidId) => {
		dispatch({ type: 'PLAY_THIS_SONG', payload: vidId });
	};

	const addToPlaylist = (vidId) => {

	const songCheck=playlist.some((items)=>{
	const conditionCheck=items.some((insideitems)=>{
		return vidId === insideitems.id.videoId
			})	
	return conditionCheck
		})
		if(songCheck){
	alert("song already exist")
	
	}else{
	const  filterSong = respononseResults.filter((item) =>{
		return vidId === item?.id?.videoId
	});
	dispatch({ type: 'ADD_TO_PLAYPLIST', payload: filterSong });
	console.log(filterSong,"Added to play");
		}
		console.log(songCheck)

	}
	
	return (
		<>
			<h5 className="text-center">Youtube Search</h5>
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
			</div>
			<div className={classes.youtubeRoot}>
			{respononseResults.length ===0 ? <h5 className="text-center">No Results Found</h5> :
				(respononseResults &&
					respononseResults.map((items, idx) => {
						return (
							<div key={idx}>
								<SingleVideoObject
									title={items?.snippet?.title}
									img={items.snippet?.thumbnails?.high?.url}
									category={items?.snippet?.channelTitle}
									icon1={<PlayCircleOutlineIcon onClick={() => playThisVid(items?.id?.videoId)} />}
									icon2={<AddIcon onClick={()=>addToPlaylist(items?.id?.videoId)}/>}
								/>
							</div>
						);
					}))
			}
			</div>
		</>
	);
};
export default React.memo(YoutubeSearch);
// utubeVideoPlay
// {youtubeResponse &&
// 	youtubeResponse.map((items, idx) => {
// 		return (
// 			<div key={idx}>
// 				<SingleVideoObject
// 					title={items.snippet.title}
// 					img={items.snippet.thumbnails.high.url}
// 					category={items.snippet.channelTitle}
// 					icon1={<PlayCircleOutlineIcon onClick={() => playThisVid(items.id.videoId)} />}
// 					icon2={<AddIcon />}
// 				/>
// 			</div>
// 		);
// 	})}
