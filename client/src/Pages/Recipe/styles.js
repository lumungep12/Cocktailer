import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	main: {
		padding: "1rem 0",
	},
	title: {
		textAlign: "center",
	},
	mainContainer: {
		width: "100%",
		display: "flex",
		padding: "3rem 0",
	},
	ingredients: {
		width: "50%",
	},
	meal: {
		width: "50%",
	},
	image: {
		height: 510,
	},
	tutorial: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));
