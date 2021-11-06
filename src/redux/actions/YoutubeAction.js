import API from '../../utitils/Api';
const youtube = (termFromSearchBar) => async (dispatch, getState) => {

	console.log('from dispatch');
	try {
		// const response = await API.get(`?id=${id}&key=${token}`);
		const response = await API.get('/search', {
			params: {
				q: termFromSearchBar
			}
		});

		console.log(response.data.items);
		dispatch({ type: 'GET_RESULT', payload: response?.data?.items });
		return response.data
	} catch (e) {
		console.log('error message', e);
	}
};

export default youtube;
