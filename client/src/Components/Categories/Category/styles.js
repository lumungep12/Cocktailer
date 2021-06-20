import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	image: {
		height: 250,
	},
	title: {
		textAlign: "center",
		padding: "2rem 0",
	},
	actions: {
		display: "flex",
		justifyContent: "space-between",
	},
}));
