import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import {
	Typography,
	Container,
	Box,
	LinearProgress,
	Grid,
} from "@material-ui/core";
import {useQuery} from 'react-query';
import useStyles from "./styles";

const Categories = () => {
	const [user] = useState(JSON.parse(localStorage.getItem("profile")));
	// const [alcoholic, setAlcoholic] = useState([]);
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(10);
	const history = useHistory();
	// styling
	const classes = useStyles();

	const GetData = () => {
		const categories = useQuery("categories", () => axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'));
		const filters = useQuery("filters", () => axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'));
		return [categories, filters];
	  }
	
	  const [
		  {isLoading: loadingCategories, data: categories},
		  {isLoading: loadingFilters, data: filters}
	  ] = GetData();

	  const {drinks} = categories.data;
	  const drinks2 = filters.data.drinks;

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 100 ? 10 : prevProgress + 10
			);
		}, 800);
		return () => {
			clearInterval(timer);
		};
	}, []);

	const LinearProgressWithLabel = (props) => {
		return (
			<Box display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress variant="determinate" {...props} />
				</Box>
				<Box minWidth={35}>
					<Typography variant="body2" color="textSecondary">
						{`${Math.round(props.value)}%`}
					</Typography>
				</Box>
			</Box>
		);
	};

	if (!user) history.push("/auth");

	return (
		<Container>
				<Container className={classes.main}>
					<Typography variant="h4" className={classes.title}>
						All Categories
					</Typography>
					<Grid container spacing={3} className={classes.categories}>
						{drinks?.map((drink) => (
							<Grid
								item
								className={classes.wrapper}
								component={Link}
								to={{
									pathname: `/category/:${drink.strCategory}`,
								}}
							>
								<div className={classes.overlay}>
									<Typography
										variant="h6"
										className={classes.text}
									>
										{drink.strCategory}
									</Typography>
								</div>
							</Grid>
						))}
					</Grid>
					<br />
					<br />
					<Typography variant="h4">Other Filters</Typography>
					<Grid container spacing={3} className={classes.categories}>
						{drinks2?.map((drink) => (
							<Grid
								item
								className={`${classes.filter} ${classes.wrapper}`}
								component={Link}
								to={{
									pathname: `/category/:${drink.strAlcoholic}`,
								}}
							>
								<div className={classes.overlay}>
									<Typography
										variant="h6"
										className={classes.text}
									>
										{drink.strAlcoholic}
									</Typography>
								</div>
							</Grid>
						))}
					</Grid>
				</Container>
		</Container>
	);
};

export default Categories;
