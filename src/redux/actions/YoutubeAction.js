import API from '../../utitils/Api';
const youtube = (termFromSearchBar) => async (dispatch, getState) => {
	const token = 'AIzaSyAD-SuaapjRs-ri8ibgTUaHh34zSGVmplo';
	const id = '1DpH-icPpl0';

	console.log('from dispatch');
	try {
		// const response = await API.get(`?id=${id}&key=${token}`);
		const response = await API.get('/search', {
			params: {
				q: termFromSearchBar
			}
		});

		console.log(response.data);
		dispatch({ type: 'GET RES', payload: response?.data?.items });
	} catch (e) {
		console.log('error message', e);
	}
};

export default youtube;
