const getCurrentDate = (separator = '') => {
	let newDate = new Date();
	let date = newDate.getDate();
	let month = newDate.getMonth();
	let year = newDate.getFullYear();
	const monthsName = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	return ` ${separator}${month < 10 ? `${monthsName[month]}` : `${monthsName[month]}`} ${date} , ${year}`;
};
export default getCurrentDate;
