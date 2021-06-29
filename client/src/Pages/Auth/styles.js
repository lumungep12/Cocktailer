import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	inputField: {
		marginBottom: "10px",
	},
	container: {
		height: "75vh",
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "6rem",
		padding: "1rem",
		background: "rgba(0,0,0,0.7)",
		color: "#fff",
	},
	form: {
		width: "70%",
		marginTop: "2rem",
		color: "#fff",
	},
	heading: {
		paddingTop: "1rem",
		textTransform: "capitalize",
	},
	google: {
		marginLeft: "1rem",
	},
}));
