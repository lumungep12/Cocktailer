import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
	Container,
	Grid,
	Typography,
	Card,
	CardActionArea,
	CardMedia,
	CardActions,
	Button,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";

const Category = (props) => {
	const [drinks, setDrinks] = useState([]);
	const dummyDrinks = new Array(12).fill(0);
	const [loading, setLoading] = useState(true);

	const path = props.location.pathname;
	const param = path.substr(11);

	const classes = useStyles();

	const getByCategory = () => {
		axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`
			)
			.then((res) => {
				const { drinks } = res.data;
				setDrinks(drinks);
				setLoading(!loading);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getByAlcoholic = () => {
		axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${param}`
			)
			.then((res) => {
				const { drinks } = res.data;
				setDrinks(drinks);
				setLoading(!loading);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (param.includes("alcohol")) {
			getByAlcoholic();
		} else {
			getByCategory();
		}
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<Container>
				<br />
				<br />
				<br />
				<br />
				<Typography variant="h4" className={classes.title}>
					Cocktails
				</Typography>
				{loading ? (
					<Grid container spacing={2}>
						{dummyDrinks.map((drink) => (
							<Grid item xs={12} sm={6} md={4}>
								<Skeleton
									variant="rect"
									width={380}
									height={250}
								/>
								<div className={classes.cardFooter}>
									<Skeleton
										variant="text"
										width={300}
										height={60}
									/>
									&nbsp;
									<Skeleton
										variant="text"
										width={70}
										height={60}
									/>
								</div>
							</Grid>
						))}
					</Grid>
				) : (
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
				)}
			</Container>
		</>
	);
};

export default Category;
