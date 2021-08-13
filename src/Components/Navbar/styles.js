import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	navbar: {
		background: "rgba(0,0,0,0.8)",
	},
	link: {
		color: "#fff",
		fontWeight: "600",
		"&:hover": {
			color: "#FA8072",
			transition: "all.4s ease-in",
		},
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
		color: "#FA8072",
		fontSize: "2rem",
		"&:hover": {
			color: "red",
			transition: "all.4s ease-in",
		},
	},
	profile: {
		display: "flex",
		width: "105%",
		justifyContent: "space-around",
		alignItems: "center",
	},
}));
