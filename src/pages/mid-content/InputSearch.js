import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
//hooks
import { useDispatch } from 'react-redux';
//files import
import { useStyles } from './Styles';
import vimeo from '../../redux/actions/VimeoAction';
import youtube from '../../redux/actions/YoutubeAction';

const InputSearch = () => {
	const [ searchQuery, setSearchQuery ] = useState('');
	const [ btnState, setBtnState ] = useState(false);
	const classes = useStyles();
	const dispatch = useDispatch();
	const inputSearchIcon = {
		lineHeight: '25px',
		background: '#5a585899'
	};
	useEffect(() => {
		let mounted = false;
		setSearchQuery('');
		return () => {
			mounted = true;
		};
	}, []);

	const inputSearch = (evt) => {
		console.log(evt.target.value);
		setSearchQuery(evt.target.value);
	};
	const handlekeyDown = async (key) => {
		setBtnState(true);
		if (key.keyCode === 13) {
			if (searchQuery.query !== '') {
				const vimeoRes = await dispatch(vimeo(searchQuery));
				const youtubeRes = await dispatch(youtube(searchQuery));
				setSearchQuery('');
				setBtnState(false);
			}
		}

		setBtnState(false);
	};
	const sendQuery = async (evnt) => {
		setBtnState(true);
		if (searchQuery.query !== '') {
			const vimeoRes = await dispatch(vimeo(searchQuery));
			const youtubeRes = await dispatch(youtube(searchQuery));
			setSearchQuery('');
			setBtnState(false);
		}

		console.log('check all video');
	};
	return (
		<div>
			<div className="input-group" style={{ background: '#5a585899' }}>
				<input
					type="text"
					className={classes.inputSearch}
					placeholder="Search Videos..."
					onChange={inputSearch}
					onKeyDown={handlekeyDown}
					value={searchQuery}
				/>
				<div>
					<span style={{ ...inputSearchIcon }}>
						<button disabled={btnState} onClick={sendQuery} className={classes.buttonStyleRemove}>
							<SearchIcon width="20px" height="20px" />
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};
export default React.memo(InputSearch);
