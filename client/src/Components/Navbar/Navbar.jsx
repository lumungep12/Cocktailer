import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import Power from '@material-ui/icons/PowerSettingsNewRounded';
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
		history.push("/auth");
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
			<Toolbar className={styles.toolbar}>
				<div>
					<Button>
						Chief Chef
					</Button>
				<Button component={Link} to="/about">
					About
				</Button>
				<Button component={Link} to="/categories">
					Categories
				</Button>
				</div>
				<div>
                {user ? (
                    <div className={styles.profile}>
                        <Avatar className={styles.avatar} alt={user?.result?.name} src={user?.result?.imageUrl}>
                            {user?.result?.name.charAt(0)}
                        </Avatar>
                        <Typography className={styles.username}>
                            Jambo {user?.result?.name} 
                        </Typography>
						<Button className={styles.logout} onClick={logout}>
                            <Power/>
						</Button>
                    </div>
                ) : null}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
