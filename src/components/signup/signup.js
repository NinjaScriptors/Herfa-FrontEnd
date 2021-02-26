import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as actions from "../../store/actions/signup-actions"
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom"

// copyright component
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



//styles
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "red",
        backgroundImage: "url(https://images.unsplash.com/photo-1468322638156-074863f9362e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
    },
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));










function SignUp(props) {
    const classes = useStyles();
    // Hooks && Helper functions : 
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [name, setname] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        let fullName = `${firstName} ${lastName}`;
        console.log(email, password, name, fullName)
        props.getUserInfo({ email, password, name, fullName })
      
    }

    function handleChange(e) {
        // console.log(e.target.name)
        if (e.target.name == "email") {
            let newEmail = e.target.value;
            setEmail(newEmail);
        }
        if (e.target.name == "name") {
            let newname = e.target.value;
            setname(newname);
        }
        if (e.target.name == "password") {
            let newPass = e.target.value;
            setPassword(newPass)
        }
        if (e.target.name == "firstName") {
            let newFirstName = e.target.value;
            setFirstName(newFirstName)
        }
        if (e.target.name == "lastName") {
            let newLastName = e.target.value;
            setLastName(newLastName)
        }
    }
    return (
        <Container className={useStyles.root} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="name"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <NavLink className="nav-link" to='/sign-in'>Aleready have an acount sign in</NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}






const mapStateToProps = state => ({
    userState: state
});


const mapDispatchToProps = (dispatch, getState) => ({
    getUserInfo: (userInfo) => dispatch(actions.getUserInfo(userInfo))
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
