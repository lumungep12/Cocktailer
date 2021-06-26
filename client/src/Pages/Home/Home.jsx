import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
import Arrow from '@material-ui/icons/ArrowForwardIos';

const Home = () => {
    const classes = useStyles();


    return(
        <>
        <div className={classes.home}>
            <div className={classes.overlay}>
                <Typography variant="h1">Be Your Own Mixologist</Typography>
                <Button variant="contained"><Arrow/></Button>
            </div>
        </div>
        </>
    )
}

export default Home;