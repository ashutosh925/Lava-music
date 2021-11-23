/* eslint-disable no-unused-vars */
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
		const duration=[]
		const loopids = mapIds.forEach((item) => {
			const callids = async () => {
				try{
					const response2 = await API.get(item);
					respn.push(response2?.data?.items[0].statistics?.viewCount);
					duration.push(response2?.data?.items[0].contentDetails?.duration);
					dispatch({type:'GET_VIEWS',payload:respn});
					dispatch({type:"GET_DURATION",payload:duration})
					
				}catch(error){
					console.log(error);
				}
				
			};
			callids()
		});

		dispatch({ type: 'GET_RESULT', payload: response.data.items });
	} catch (err) {
		console.log('error message', err);
	}
};

export default youtube;
