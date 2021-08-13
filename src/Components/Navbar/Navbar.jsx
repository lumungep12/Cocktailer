import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
	// styling
	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.navbar}>
			<Toolbar className={classes.toolbar}>
				<div>
					<Button className={classes.link} component={Link} to="/">
						Home
					</Button>
					<Button
						className={classes.link}
						component={Link}
						to="/about"
					>
						About
					</Button>
					<Button
						className={classes.link}
						component={Link}
						to="/categories"
					>
						Cocktails
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
