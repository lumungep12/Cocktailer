import {Link} from 'react-router-dom';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import useStyles from './styles';

const Navbar = () => {

    const styles = useStyles();


    return (
        <AppBar position="static">
             <Toolbar>
            <div className={styles.logo}>
                <Typography varinat="h5" component={Link} to="/">Chief Chef</Typography>
            </div>
           
                <Button component={Link} to="/">Home</Button>
                <Button component={Link} to="/about">About</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;