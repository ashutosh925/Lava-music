import axios from 'axios';
const token = 'AIzaSyAD-SuaapjRs-ri8ibgTUaHh34zSGVmplo';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 30,

		key: token
	}
});
// safeSearch: 'none',
// 		type: 'video',
// 		videoSyndicated: 'any',
// 		videoLicense: 'any',
// 		videoType: 'any',
