import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom"
import * as actions from "../../store/actions/signin-actions"
import { Redirect,Route } from "react-router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignInSide(props) {
  const classes = useStyles();



  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let[loggedin, setLoggedin] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password)
    props.getSignedUpUserInfo({ username, password })
    setTimeout(function () { return <Redirect from="/sign-in" to="/"/> }, 2000);

  }

  function handleChange(e) {
    console.log(e.target.name)
    if (e.target.name === "username") {
      let newUserName = e.target.value;
      setUserName(newUserName);
    }
    if (e.target.name === "password") {
      let newPass = e.target.value;
      setPassword(newPass)
    }
  }

// let x =  JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")): "test"
//   useEffect(() => {
//     console.log("iiiiiiiiiiiiiiiii")
  
// }, x)
// function test(){

// console.log("insideeeeeeeeeeee")
//   return <Redirect to="/" /> 
// }
// if(!JSON.parse(localStorage.getItem("userInfo")) ) return <Redirect to="/" /> 
  return (
    
    <Grid container component="main" className={classes.root}>
     
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="username"
              autoComplete="Username"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <NavLink to='/' variant="body2"> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
             
                Sign In
             
            </Button >
            {/* </NavLink> */}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to='/sign-up' variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  userInfo: state
});

const mapDispatchToProps = dispatch => ({
  getSignedUpUserInfo: (userInfo) => { dispatch(actions.getSignedUpUserInfo(userInfo)) }
})



export default connect(mapStateToProps, mapDispatchToProps)(SignInSide);






