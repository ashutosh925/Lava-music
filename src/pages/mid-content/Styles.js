import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		width: '90%',
		margin: 'auto !important'
	},
	buttonStyleRemove: {
		background: 'transparent',
		border: 'none',
		lineHeight: '16px !important',
		color: '#e4e3e3',
		margin: '1px'
	}
}));
