import {useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import {Container, Grid, Typography, Card, CardActionArea, CardMedia, CardActions, Button } from '@material-ui/core';
import useStyles from './styles';
import Auth from "../../../Pages/Auth/Auth";


const Category = (props) => {
	const [user] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
    const [drinks, setDrinks] = useState([]);

	const path = props.location.pathname;
	const param = path.substr(11);

	console.log(param);

	const classes = useStyles();

	const getByCategory = () => {
		axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`
			)
			.then((res) => {
				const {drinks}= res.data;
                setDrinks(drinks);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const getByAlcoholic = () => {
		axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${param}`
			)
			.then((res) => {
				const {drinks}= res.data;
                setDrinks(drinks);
				console.log(drinks);
			})
			.catch((error) => {
				console.log(error);
			});
	}


	useEffect(() => {
		if(param.includes('alcohol')){
			getByAlcoholic();
		}else{
			getByCategory();
		}
	}, []);

	return (
		<>
		{user ? (
		<Container>
			<br /><br /><br /><br />
			<Typography variant="h4" className={classes.title}>
					Cocktails
				</Typography>
			<Grid container spacing={2}>
            {drinks?.map((single) => (
				<Grid item xs={12} sm={6} md={4}>
				<Card key={single.idMeal}>
					<CardActionArea>
						<CardMedia
							className={classes.image}
							image={single.strDrinkThumb}
							title={single.strDrink}
						/>
					</CardActionArea>
					<CardActions className={classes.actions}>
					<Typography variant="h6">
								{single.strDrink}
							</Typography>
						<Button
							variant="contained"
							color="secondary"
							component={Link}
							to={{
								pathname: `/drink/:${single.idDrink}`,
							}}
						>
						How To
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
