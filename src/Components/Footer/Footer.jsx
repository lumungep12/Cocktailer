import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles';

const Footer = () => {

    const classes = useStyles();

    return(
        <BottomNavigation className={classes.nav} >
        <div className={classes.socials}>
            <a href="https://github.com/lumunge" rel="noreferrer" target="_blank"><BottomNavigationAction icon={<GitHubIcon />} /></a>
            <a href="https://ke.linkedin.com/in/lumunge" rel="noreferrer" target="_blank"><BottomNavigationAction icon={<LinkedInIcon />} /></a>
            <a href="#!" onClick={() => alert("lumungep12@gmail.com")}><BottomNavigationAction icon={<MailIcon />} /></a>
        </div>
      </BottomNavigation>
    )
}

export default Footer;