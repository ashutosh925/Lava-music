import axios from 'axios';
const token = 'AIzaSyAD-SuaapjRs-ri8ibgTUaHh34zSGVmplo';
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 15,
		key: token
	}
});
