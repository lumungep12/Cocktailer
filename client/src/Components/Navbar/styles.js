import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	navbar: {
		background: "rgba(0,0,0,0.6)",
	},
	link: {
		color: "#fff",
		fontWeight: "600",
	},
	username: {
		color: "#fff",
		fontWeight: "600",
	},
	avatar: {
		backgroundColor: "#FA8072",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logout: {
		color: "red",
		fontSize: "2rem",
	},
	profile: {
		display: "flex",
		width: "105%",
		justifyContent: "space-around",
		alignItems: "center",
	},
}));
