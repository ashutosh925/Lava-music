import API from '../../utitils/Api';
import axios from 'axios';

const youtube = (termFromSearchBar) => async (dispatch, getState) => {
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

		const mapIds = filtervideoId.map((items) => {
			return `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${items}`;
		});
		const respn = [];
	
		const loopids = mapIds.forEach((item) => {
			const callids = async () => {
				try{
					const response2 = await API.get(item);
					respn.push(response2?.data?.items[0].statistics?.viewCount);
					dispatch({type:'GET_VIEWS',payload:respn});
					console.log(respn)
				}catch(error){
					console.log(error);
				}

			};
		callids()
		});

		dispatch({ type: 'GET_RESULT', payload: response.data.items });
	} catch (e) {
		console.log('error message', e);
	}
};

export default youtube;
