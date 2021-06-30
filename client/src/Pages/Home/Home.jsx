import useStyles from './styles';
import {Link} from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Arrow from '@material-ui/icons/ArrowForwardIos';

const Home = () => {
    const classes = useStyles();


    return(
        <div className={classes.home}>
            <div className={classes.overlay}>
                <Typography variant="h2">Try out new drinks with free cocktail recipes</Typography>
                <Button variant="contained" component={Link} to="/categories"><Arrow/></Button>
            </div>
        </div>
    )
}

export default Home;