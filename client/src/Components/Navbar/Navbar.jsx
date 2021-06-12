import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
// redux
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navbar = () => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);

	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const styles = useStyles();

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		history.push("/");
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [location]);

	return (
		<AppBar position="static">
			<Toolbar>
				<div className={styles.logo}>
					<Typography varinat="h5" component={Link} to="/">
						Chief Chef
					</Typography>
				</div>
				<Button component={Link} to="/about">
					About
				</Button>
				<Button component={Link} to="/recipes">
					Recipes
				</Button>
                {user ? (
                    <div className={styles.profile}>
                        <Avatar className={styles.avatar} alt={user?.result?.name} src={user?.result?.imageUrl}>
                            {user?.result?.name.charAt(0)}
                        </Avatar>
                        <Typography className={styles.username} variant="h5">
                            {user?.result?.name}
                        </Typography>
                        <Button className={styles.logout} variant="contained" color="secondary" onClick={logout}>
                            Logout
                        </Button>
                    </div>
                ) : null}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
