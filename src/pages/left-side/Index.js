import React from 'react';
//material ui imports

//files import
import { ReactComponent as Playlist } from '../../assets/svg/newplaylist.svg';
import { ReactComponent as Pasteembedded } from '../../assets/svg/pasteembedded.svg';
import EditListButtons from '../../components/PlayerButtons';
import PlayList from './PlayList';
import AllPlaylist from './AllPlaylist';
import { useStyles } from './Styles';
const EditPlaylist = () => {
	const classes = useStyles();
	const buttonProps = {
		fontSize: '13px',
		padding: '3px 8px',
		margin: '0px 4px'
	};
	return (
		<div className={classes.root}>
			<div className="d-flex justify-content-evenly">
				<button className={classes.buttonStyleRemove} onClick={() => console.log('new playlist ')}>
					<EditListButtons
						text="New Playlist"
						icon={<Playlist width="23px" height="23px" fill="white" />}
						{...buttonProps}
					/>
				</button>
				<button className={classes.buttonStyleRemove} onClick={() => console.log('paste code')}>
					<EditListButtons
						text="Paste Embedded code"
						icon={<Pasteembedded width="23px" height="23px" fill="white" />}
						{...buttonProps}
					/>
				</button>
			</div>
			<PlayList />
			<AllPlaylist />
		</div>
	);
};
export default React.memo(EditPlaylist);
