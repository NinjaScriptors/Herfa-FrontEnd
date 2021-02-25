import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Copyright() {
  return (
    <Typography style={{fontFamily: "Handlee"}} variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/" fontFamily='Handlee'>
        HERFA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Handlee',


  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    fontFamily: 'Handlee',



  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      fontFamily: 'Handlee',


  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
     
      <footer className={classes.footer}>
        <Container style={{display: "flex", justifyContent:'space-between'}}>
        <Container maxWidth="sm" >
          <Typography  style={{fontFamily: "Handlee"}} variant="body1">Sell Local Products</Typography>
          <br/>
          <Typography style={{fontFamily: "Handlee"}} variant="body1">Contact</Typography>
          <br/>
          <Typography style={{fontFamily: "Handlee"}} variant="body1">Privecy Policy</Typography>
      <Container style={{ marginLeft: "60%", marginTop: "-18%"}}>
          <Typography  style={{fontFamily: "Handlee" , display: "flex", justifyContent:'space-between', }} variant="body1">Get in touch with us</Typography>
          <InstagramIcon/>
          <FacebookIcon/>
          <GitHubIcon/>
          <TwitterIcon/>
          </Container>
          </Container>

        </Container>
        
          <Copyright />
      </footer>
    </div>
  );
}