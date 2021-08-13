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
	
	// styling
	const classes = useStyles();

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
		<AppBar position="fixed" className={classes.navbar}>
			<Toolbar className={classes.toolbar}>
				<div>
					<Button className={classes.link} component={Link} to="/">
						Home
					</Button>
				<Button className={classes.link} component={Link} to="/about">
					About
				</Button>
				<Button className={classes.link} component={Link} to="/categories">
					Cocktails
				</Button>
				</div>
				<div>
                {user ? (
					 <div className={classes.profile}>
                        <Avatar className={classes.avatar} alt={user?.result?.name} src={user?.result?.imageUrl}>
                            {user?.result?.name.charAt(0)}
                        </Avatar>
						&nbsp;
                        <Typography className={classes.username}>
                            {user?.result?.name} 
                        </Typography>
						<Button onClick={logout}>
                            <Power className={classes.logout}/>
						</Button>
                    </div>
                ) : null}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
