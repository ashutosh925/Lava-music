const initialState = {
	playlist1: [
		{
			title: 'Sickick - Talking to the Moon (Bruno Mars Remix)',
			url: 'https://www.youtube.com/watch?v=00F1PQH-MQ8&ab_channel=SickickMusic',
			views: 22805290,
			Artist: 'Bruno Mars',
			Album: 'Talking to the Moon'
		},
		{
			title: 'The Weeknd - Starboy ft. Daft Punk (Official Video)',
			url: 'https://www.youtube.com/watch?v=34Na4j8AVgA&ab_channel=TheWeekndVEVO',
			views: 1962845054,
			Artist: 'The Weeknd',
			Album: 'Starboy'
		},
		{
			title: 'The Weeknd - Save Your Tears (Official Music Video)',
			url: ' https://www.youtube.com/watch?v=XXYlFuWEuKI&ab_channel=TheWeekndVEVO',
			views: 571050817,
			Artist: 'The Weeknd',
			Album: 'Save Your Tears'
		},
		{
			title: 'DripReport - Skechers Full Song(Lyrics)',
			url: ' https://www.youtube.com/watch?v=0-k1NDLysHs&ab_channel=GOLDYLYRICS',
			views: 135007201,
			Artist: 'DripReport',
			Album: 'No Album'
		}
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PlAY NEXT':
			console.log('usedisptach login');
			localStorage.setItem('authlava', true);
			return {
				...state,
				isAuthenticated: true
			};
		case 'PlAY PREVIOUS':
			localStorage.removeItem('authlava');
			return {
				...state,
				isAuthenticated: false
			};

		default:
			return state;
	}
};
export default reducer;
