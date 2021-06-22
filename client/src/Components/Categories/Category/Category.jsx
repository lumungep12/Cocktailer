import {useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import {Container, Grid, Typography, Card, CardActionArea, CardMedia, CardActions, Button } from '@material-ui/core';
import useStyles from './styles';
import Auth from "../../../Pages/Home/Auth";


const Category = (props) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
    const [meals, setMeals] = useState([]);

	const path = props.location.pathname;
	const category = path.substr(11);

	const classes = useStyles();

	useEffect(() => {
		axios
			.get(
				`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
			)
			.then((res) => {
				const { meals } = res.data;
                setMeals(meals);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
		{user ? (
		<Container>
			<Typography variant="h4" className={classes.title}>
					** Recipies
				</Typography>
			<Grid container spacing={2}>
            {meals.map((single) => (
				<Grid item xs={12} sm={6} md={4}>
				<Card key={single.idMeal}>
					<CardActionArea>
						<CardMedia
							className={classes.image}
							image={single.strMealThumb}
							title={single.strMeal}
						/>
					</CardActionArea>
					<CardActions className={classes.actions}>
					<Typography variant="h6">
								{single.strMeal}
							</Typography>
						<Button
							variant="contained"
							color="secondary"
							component={Link}
							to={{
								pathname: `/recipe/:${single.idMeal}`,
							}}
						>
						Recipe
						</Button>
					</CardActions>
				</Card>
			</Grid>
            ))}
			</Grid>
		</Container>
		) : (
			<Auth/>
		)}
		</>
	);
};

export default Category;
