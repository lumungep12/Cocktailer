import { useState, useEffect } from "react";
import axios from "axios";
import {
	Container,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	CardHeader,
	IconButton,
	Collapse,
	Grid,
	ListItem,
} from "@material-ui/core";
import Like from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import Expand from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";

const Drink = (props) => {
	const [drinks, setDrinks] = useState([]);
	const [drink, setdrink] = useState([]);
	const [loading, setLoading] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const path = props.location.pathname;
	const drinkId = path.substr(8);

	const classes = useStyles();

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
			)
			.then((res) => {
				const { drinks } = res.data;
				setDrinks(drinks);
				setdrink(drinks[0]);
				setLoading(!loading);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// getting all ingredients
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		if (drink[`strIngredient${i}`]) {
			ingredients.push(
				`${drink[`strMeasure${i}`]} --- ${drink[`strIngredient${i}`]}`
			);
		} else {
			break;
		}
	}

	return (
		<>
			<Container className={classes.main}>
				{drinks.map((drink) => (
					<div key={drink.idDrink}>
						<Typography variant="h4" className={classes.title}>
							How to make {drink.strDrink}
						</Typography>
						<Grid
							container
							spacing={3}
							className={classes.mainContainer}
						>
							<Grid
								item
								sm={6}
								xs={12}
								className={classes.ingredients}
							>
								<Card>
									<CardHeader
										title={`${drink.strDrink}`}
										subheader={`Category: ${drink.strCategory}`}
									/>
									<Typography variant="h5">
										<ListItem>Ingredients: </ListItem>
									</Typography>
									{ingredients.map((ingredient) => (
										<ListItem>{ingredient}</ListItem>
									))}
								</Card>
							</Grid>
							<Grid item sm={6} xs={12} className={classes.drink}>
								<Card>
									<CardMedia
										className={classes.image}
										image={drink.strDrinkThumb}
										title={drink.strDrink}
									/>
									<CardActions disableSpacing>
										<IconButton>
											<Like />
										</IconButton>
										<IconButton>
											<Share />
										</IconButton>
										<IconButton onClick={handleExpandClick}>
											<Expand />
										</IconButton>
									</CardActions>
									<Collapse
										in={expanded}
										timeout="auto"
										unmountOnExit
									>
										<CardContent>
											<Typography variant="h5">
												Preparation
											</Typography>
											<Typography paragraph>
												{drink.strInstructions}
											</Typography>
										</CardContent>
									</Collapse>
								</Card>
							</Grid>
						</Grid>
					</div>
				))}
			</Container>
		</>
	);
};

export default Drink;
