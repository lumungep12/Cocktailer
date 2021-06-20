import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {
	Grid,
	Button,
	Card,
	CardMedia,
	Typography,
	CardActions,
	CardActionArea,
	Container,
	Box,
	LinearProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import Auth from "../../Pages/Home/Auth";

const Categories = () => {

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(10);
	const classes = useStyles();



	// get all meal categories
	useEffect(() => {
		axios
			.get("https://www.themealdb.com/api/json/v1/1/categories.php")
			.then((res) => {
				const allCategories = res.data.categories;
				setCategories(allCategories);
				setLoading(!loading);
				console.log(allCategories);
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
				<Grid container spacing={2}>
					{categories?.map((category) => (
						<Grid item xs={12} sm={6} md={4}>
							<Card>
								<CardActionArea>
									<CardMedia
										className={classes.image}
										image={category.strCategoryThumb}
										title={category.strCategoryDescription}
									/>
								</CardActionArea>
								<CardActions className={classes.actions}>
								<Typography variant="h5">
											{category.strCategory}
										</Typography>
									<Button
										variant="contained"
										color="secondary"
										component={Link}
										to={{
											pathname: `/category/:${category.strCategory}`,
										}}
										key={category.idCategory}
									>
										Menu
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
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
