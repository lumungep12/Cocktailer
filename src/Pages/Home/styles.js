import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	home: {
		backgroundImage:
			"url('https://mcdn.wallpapersafari.com/medium/76/75/0FBlqY.jpg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
		height: "85vh",
	},
	overlay: {
		position: "relative",
		zIndex: "999",
		background: "rgba(0,0,0,0.7)",
		width: "100%",
		height: "100%",
		color: "#fff",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
}));
