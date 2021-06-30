import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Paper, Button, Typography, Grid, Container} from "@material-ui/core";
import FormInput from "./FormInput";
import useStyles from "./styles";
// redux
import { useDispatch } from "react-redux";
import { signup, signin } from "../../Actions/Auth";

const formInitialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [formData, setFormData] = useState(formInitialState);
	const [showPassword, setShowPassword] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	// styles
	const classes = useStyles();

	const switcher = () => {
		setIsSignUp(!isSignUp);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignUp) {
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
			history.push("/categories");
		}
		console.log(formData);
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Container className={classes.container} >
			<Paper className={classes.paper} elevation={5}>
				<Typography className={classes.heading} variant="h5">
					{isSignUp ? "Create a new account here" : "enter your details to sign in"}
				</Typography>
				<form
					className={classes.form}
					autoComplete="off"
					onSubmit={handleSubmit}
				>
					<Grid container>
						{isSignUp && (
							<>
								<FormInput
									label="First Name"
									name="firstName"
									autoFocus
									half
									handleChange={handleChange}
								/>
								<FormInput
									label="Last Name"
									name="lastName"
									half
									handleChange={handleChange}
								/>
							</>
						)}
						<FormInput
							label="Email Address"
							name="email"
							type="email"
							handleChange={handleChange}
						/>
						<FormInput
							label="Password"
							name="password"
							type={showPassword ? "text" : "password"}
							handleChange={handleChange}
							handleShowPassword={handleShowPassword}
						/>
						{isSignUp && (
							<FormInput
								label="Confirm Password"
								name="confirmPassword"
								type="password"
								handleChange={handleChange}
							/>
						)}
					</Grid>
					<>
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							{isSignUp ? "SignUp" : "SignIn"}
						</Button>
						&nbsp;
						<Button
							variant="contained"
							color="default"
						>
							Reset
						</Button>
					</>
				</form>
				<Grid container justify="flex-end">
					<Grid item>
						<Button variant="contained" onClick={switcher}>
							{isSignUp
								? "Have an Account? SignIn"
								: "No Account? Signup"}
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Auth;
