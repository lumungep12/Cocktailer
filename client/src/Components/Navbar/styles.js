import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	logo: {
		// paddingRight: "2rem",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logout: {
		color: "red",
	},
	profile: {
		display: "flex",
		width: "105%",
		justifyContent: "space-around",
		alignItems: "center",
	},
}));
