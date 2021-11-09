import API from '../../utitils/VimeoApi';

const vimeo = (termFromSearchBar) => async (dispatch, getState) => {
	console.log('from dispatch', termFromSearchBar);
	try {
		const response = await API.get('/search?', {
			params: {
				q: termFromSearchBar
			}
		});
		dispatch({ type: 'VIMEO_GET_RESULT', payload: response.data });

		console.log(response);
	} catch (e) {
		console.log('error message', e);
	}
};

export default vimeo;
