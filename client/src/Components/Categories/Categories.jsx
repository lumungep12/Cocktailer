import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import {
	Typography,
	Container,
	CircularProgress,
	Grid,
} from "@material-ui/core";
import {useQuery} from 'react-query';
import useStyles from "./styles";

const Categories = () => {
	const [user] = useState(JSON.parse(localStorage.getItem("profile")));
	const history = useHistory();
	// styling
	const classes = useStyles();

	// fetch data
	const GetData = () => {
		const categories = useQuery("categories", () => axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'));
		const filters = useQuery("filters", () => axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'));
		return [categories, filters];
	  }
	
	  const [
		  {isLoading: loadingCategories, data: categories},
		  {isLoading: loadingFilters, data: filters}
	  ] = GetData();

	if (!user) history.push("/auth");

	return (
		<Container>
				<Container className={classes.main}>
					<Typography variant="h4" className={classes.title}>
						All Categories
					</Typography>
					{loadingCategories ? (<div><CircularProgress /></div>) : (
					<Grid container spacing={3} className={classes.categories}>
						{categories.data.drinks?.map((drink) => (
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
					)}
					<br />
					<br />
					<Typography variant="h4">Other Filters</Typography>
					{loadingFilters ? (<div><CircularProgress /></div>) : (
					<Grid container spacing={3} className={classes.categories}>
						{filters.data.drinks?.map((drink) => (
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
					)}
				</Container>
		</Container>
	);
};

export default Categories;
