import API from '../../utitils/Api';
import axios from 'axios';

const youtube = (termFromSearchBar) => async (dispatch, getState) => {
	console.log('from dispatch');

	try {
		const response = await API.get('/search?', {
			params: {
				q: termFromSearchBar,
				order: 'viewCount',
				type: 'video',
				videoDefinition: 'high'
			}
		});

		const filtervideoId = response.data.items.map((item) => {
			return item.id.videoId;
		});
		console.log(filtervideoId);

		dispatch({ type: 'GET_RESULT', payload: response.data.items });
	} catch (e) {
		console.log('error message', e);
	}
};

export default youtube;
