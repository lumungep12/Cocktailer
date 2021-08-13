import {Container, Typography} from '@material-ui/core';
import useStyles from './styles';


const About = () => {
    const classes = useStyles();
    return (
        <Container >
            <div className={classes.about}>
            <Typography variant="h2">Need A Drink / Cocktail?</Typography>
            <Typography variant="h5">This is a web application that 
            enables you to make your own drinks or cocktails.
            We offer over 500+ beverages, alcoholic and non-alcoholic with images, ingredients and instructions
            on how to go about preparing the drink.
            We have included filters for various preferences for our respective users. 
            Hope you enjoy
            </Typography>
            </div>
        </Container>
    )
}

export default About;
