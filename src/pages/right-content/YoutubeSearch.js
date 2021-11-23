import React, { useState ,useEffect} from 'react';
import Moment from 'moment';
//material ui import
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
//hooks import
import { useSelector, useDispatch } from 'react-redux';

//files import
import { useStyles } from './Styles';
import youtube from '../../redux/actions/YoutubeAction';
import SingleVideoObject from '../../components/SingleVideo';


const YoutubeSearch = () => {
	const [ searchBar, setSearchBar ] = useState();
	const dispatch = useDispatch();
	const classes = useStyles();
	const {responseResults,playlist,views,playPause} = useSelector((state) => state.utube);
	const {pauseVideo} = useSelector((state) => state.player);

	const [playPauseBTnState,setPlayPauseBTnState] = useState(responseResults.playPause);

	
	//search
	useEffect(() => {
		setPlayPauseBTnState(playPause)
	
	}, [playPauseBTnState])
	const handleChange = (event) => {
		setSearchBar( event.target.value);
	};
	const handlekeyDown = async (key) => {
		if (key.keyCode === 13) {
			if (searchBar.query !== '') {
				const res = await dispatch(youtube(searchBar));
				setSearchBar('');
			}
		}
	};
	const searchQuery = async (evnt) => {
		if (searchBar.query !== '') {
			dispatch(youtube(searchBar));
		}
	};

	//play one video
	const playThisVid = (vidId) => {
		const videoUrl=`https://www.youtube.com/embed/${vidId}`
		dispatch({ type: 'PLAY_THIS_SONG', payload: videoUrl });
		play(vidId)
		dispatch({ type: 'PLAY_SONG' });
		
	};


	// add to playlist
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
	const  filterSong = responseResults.filter((item) =>{
		return vidId === item?.id?.videoId
	});
	dispatch({ type: 'ADD_TO_PLAYPLIST', payload: filterSong });
	console.log(filterSong,"Added to play");
		}
		console.log(songCheck)
	}


const play=(videoId)=>{
dispatch({type:'PLAY_PAUSE',payload:videoId})

}
const pause=()=>{
	console.log("pause")
	dispatch({type:'PAUSE_SONG'})
	dispatch({type:'PAUSE_UTUBE_SONG_BTNSTATE'})

	
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
			{responseResults?.length === 0 ? <h5 className="text-center">No Videos Found</h5> :
				(responseResults &&
					responseResults.map((items, idx) => {
						return (
							<div key={idx}>
								<SingleVideoObject
								title={items?.snippet?.title}
								img={items?.snippet?.thumbnails?.high?.url}
								category={items?.snippet?.channelTitle}
								publichDate={Moment(items?.snippet?.publishTime).format("MMM Do YY")}
								icon1={<button 
								className={classes.playBtn}>{items.pauseSong ?  <PauseCircleOutlineIcon onClick={pause}/>: <PlayCircleOutlineIcon onClick={() => playThisVid(items?.id?.videoId)}/>}</button>}
								icon2={<AddIcon onClick={()=>addToPlaylist(items?.id?.videoId)}/>}
								toolTip={items.pauseSong ? "Pause" : "Play"}
								views={views[idx]}
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
