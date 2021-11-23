import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '97%',
		margin: 'auto',
		backgroundColor: '#00000052',
		padding: '15px 5px',
		boxShadow: '0px 0px 8px -1px rgb(58 0 0)',
		[theme.breakpoints.down('700')]: {
			display: 'none !important'
		}
	},
	root2: {
		width: '97%',
		margin: 'auto',
		backgroundColor: '#00000052',
		padding: '15px 5px',
		boxShadow: '0px 0px 8px -1px rgb(58 0 0)'
	}
}));
