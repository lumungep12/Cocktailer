import {BottomNavigation, BottomNavigationAction, Typography} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles';

const Footer = () => {

    const classes = useStyles();

    return(
        <div className={classes.footer}>
        <BottomNavigation>
        <div className={classes.socials}>
            <BottomNavigationAction icon={<GitHubIcon />} />
            <BottomNavigationAction icon={<LinkedInIcon />} />
            <BottomNavigationAction icon={<MailIcon />} />
        </div>
      </BottomNavigation>
      <div className={classes.footerDetails}>
          <Typography>All rights reserved @2020 lumunge</Typography>
      </div>
      </div>
    )
}

export default Footer;