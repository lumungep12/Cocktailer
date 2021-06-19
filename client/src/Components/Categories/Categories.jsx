import {Link} from 'react-router-dom';
import {Grid, Button, Card, CardMedia, CardContent, Typography, CardActions, CardActionArea, Container} from "@material-ui/core";
import useStyles from './styles';

const Categories = ({categories}) => {

    const classes = useStyles();

    return (
            <Container>
                <Typography variant="h4" className={classes.title}>Our Categories</Typography>
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
                            <CardContent>
                                <Typography variant="h5">{category.strCategory}</Typography>
                                {/* <Typography variant="body2">{category.strCategoryDescription}</Typography> */}
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant="contained" component={Link} to={{pathname: `/category/:${category.strCategory}`}} key={category.idCategory} >{category.strCategory}</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Container>
    )
}

export default Categories;