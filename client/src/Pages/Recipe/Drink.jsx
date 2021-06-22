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
    Box, 
    LinearProgress
} from "@material-ui/core";
import Like from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import Expand from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";
import Auth from "../Auth/Auth";

const Drink = (props) => {
    const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
	const [drinks, setDrinks] = useState([]);
	const [drink, setdrink] = useState([]);
    const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(10);
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
				const {drinks} = res.data;
				setDrinks(drinks);
				setdrink(drinks[0]);
				setLoading(!loading);
				// console.log(drinks);
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
        {user ? (
		<Container className={classes.main}>
			{drinks.map((drink) => (
				<div key={drink.idDrink}>
					<Typography variant="h4" className={classes.title}>{drink.strdrink}</Typography>
					<Grid
						container
						spacing={3}
						className={classes.mainContainer}
					>
						<Grid item sm={6} xs={12} className={classes.ingredients}>
							<Card>
                            <CardHeader
                                title={`${drink.strDrink}`}
                                subheader={`Category: ${drink.strCategory}`}
                            />
                            <Typography variant="h5">
								<ListItem>Ingredients: </ListItem>
                                </Typography>
									{ingredients.map((ingredient) => (
										<ListItem>
                                           {ingredient}
                                        </ListItem>
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
        ) : (
            <Auth/>
        )}
        </>
	);
};

export default Drink;
