import {Container, Typography} from '@material-ui/core';
import useStyles from './styles';


const About = () => {
    const classes = useStyles();
    return (
        <Container >
            <div className={classes.about}>
            <Typography variant="h3">Need A Drink ?</Typography>
            <Typography variant="paragraph">Welcome to cocktales. This is a web tool that 
            enables you to make your own drinks or cocktails without having to rely on professionals
            Here you get over 500 plus beverages, with images, ingredients and instructions
            on how to go about preparing the drink.
            We have included filters such as alcohilic cocktails, non-alcoholic and more. 
            Hope you enjoy
            </Typography>
            </div>
        </Container>
    )
}

export default About;
