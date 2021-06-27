import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	main: {
		marginTop: "6rem",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	wrapper: {
		backgroundImage:
			"url('https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY2t0YWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')",
		backgroundPosition: "center",
		backgroundSize: "cover",
		margin: "2rem",
		width: "200px",
		height: "150px",
		position: "relative",
		overflow: "hidden",
		transition: "all .4s ease-in",
		"&:hover": {
			transform: "scale(1.1)",
		},
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.5)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: "red",
	},
	text: {
		color: "#f4d03f",
		textDecoration: "none",
		fontWeight: "600",
	},
	categories: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
	paper: {
		padding: "1.5rem",
	},
	button: {
		margin: "10px",
		textTransform: "capitalize",
		padding: "5px 10px",
	},
}));
