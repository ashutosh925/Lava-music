import axios from 'axios';
const token = 'AIzaSyDyVPT8VbPK6aoc398ZZMXVEpOHth5d88s';
const token2 = 'AIzaSyAD-SuaapjRs-ri8ibgTUaHh34zSGVmplo';
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 30,
		key: token2
	}
});
// safeSearch: 'none',
// 		type: 'video',
// 		videoSyndicated: 'any',
// 		videoLicense: 'any',
// 		videoType: 'any',
