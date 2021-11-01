import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme, props) => ({
	root: {
		margin: '0px 0px 25px 0px',
		backgroundColor: '#00000052'
	},
	appbarParent: {
		padding: '10px 10px !important'
	},
	userName: {
		color: '#d1d1d1'
	},
	userImage: {
		width: '30px',
		height: '30px',
		margin: '0px 10px !important'
	},
	logo: {
		color: '#d1d1d1'
	}
}));
