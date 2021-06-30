import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	inputField: {
		marginBottom: "10px",
	},
	input: {
		color: "#fff",
		letterSpacing: "2px",
		fontSize: "1.3rem",
	},
	container: {
		height: "72vh",
		"@media (max-width: 768px)": {
			marginBottom: "4rem",
		},
		"@media (max-width: 598px)": {
			marginBottom: "7rem",
		},
		"@media (max-width: 370px)": {
			marginBottom: "14rem",
		},
		"@media (max-width: 398px)": {
			marginBottom: "14rem",
		},
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
	},
	heading: {
		paddingTop: "1rem",
		textTransform: "capitalize",
		textAlign: "center",
	},
	actions: {
		"@media (max-width: 400px)": {
			display: "flex",
			flexDirection: "column",
			marginBottom: "1rem",
		},
	},
	accountCta: {
		"@media (max-width: 780px)": {
			marginTop: "1rem",
		},
		"@media (max-width: 400px)": {
			display: "flex",
			justifyContent: "center",
		},
	},
}));
