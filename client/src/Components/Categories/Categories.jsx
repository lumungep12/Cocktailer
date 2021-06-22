import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {
	Grid,
	Button,
	Typography,
	Container,
	Box,
	LinearProgress,
	Paper,
} from "@material-ui/core";
import useStyles from "./styles";
import Auth from "../../Pages/Auth/Auth";

const Categories = () => {

	const [user] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
	const [drinks, setDrinks] = useState([]);
	const [ingredients, setIngredients] = useState([]);
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(10);
	const classes = useStyles();



	// get all drink by categories
	useEffect(() => {
		axios
			.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
			.then((res) => {
				const {drinks} = res.data;
				setDrinks(drinks);
				setLoading(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// get all drink by ingredients
	useEffect(() => {
		axios
			.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
			.then((res) => {
				const {drinks} = res.data;
				setIngredients(drinks);
				setLoading(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10))
		}, 800);
		return () => {
			clearInterval(timer);
		}
	}, []);

	const LinearProgressWithLabel = (props) => {
		return(
			<Box display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress variant="determinate" {...props}/>
					</Box>
					<Box minWidth={35}>
						<Typography variant="body2" color="textSecondary">
							{`${Math.round(props.value)}%`}
						</Typography>
					</Box>
			</Box>
		)
	}

	return (
		<>
		{user ? (
			<Container>
				<Typography variant="h4" className={classes.title}>
					Our Categories
				</Typography>
				{loading ? (
				<Container>
				<Paper elevation={3}>
					{drinks?.map((drink) => (
						<Button
							variant="contained"
							color="secondary"
							component={Link}
							to={{
								pathname: `/category/:${drink.strCategory}`
							}}
						>
							<p>{drink.strCategory}</p>
						</Button>
					))}
				</Paper>
				<br />
				<Typography variant="h3">By Ingredients</Typography>
				<br />
				<Paper elevation={3}>
				{ingredients?.map((drink) => (
					<Button
						variant="contained"
						color="secondary"
						component={Link}
						to={{
							pathname: `/category/:${drink.strIngredient1}`
						}}
					>
						<p>{drink.strIngredient1}</p>
					</Button>
				))}
			</Paper>
			</Container>
				) : (
					<div>
						<br /><br />
						<LinearProgressWithLabel value={progress} />
					</div>
				)}

			</Container>
			) : (
				<Auth/>
			)}
			</>
	);
};

export default Categories;