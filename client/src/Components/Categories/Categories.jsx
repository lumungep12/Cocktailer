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
} from "@material-ui/core";
import useStyles from "./styles";

const Categories = ({ categories }) => {
	const classes = useStyles();

	return (
			<Container>
				<Typography variant="h4" className={classes.title}>
					Our Categories
				</Typography>
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


			</Container>
	);
};

export default Categories;
