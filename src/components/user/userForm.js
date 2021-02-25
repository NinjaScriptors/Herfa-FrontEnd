import { Container } from '@material-ui/core';
import React from 'react';
import { form, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getDetailedObj } from "../../store/userStore/userSlicer";
import  { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const UserForm = props => {
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getDetailedObj(props.user._id));
        };
        fetchData();
    }, [dispatch]);

    return (
        // <>
        <Container>
            <h1>Inside User Form</h1>

            <form style={{ display: 'flex', flexDirection: 'column'}}>
                <TextField id="name-input" label="Name" defaultValue="" />
                <TextField disabled id="email-disabled" label="Email" defaultValue={props.user.email} />
                <TextField disabled id="username-disabled" label="Username" defaultValue={props.user.name} />
                <TextField id="passowrd-input" label="Password" defaultValue="" />
                <TextField id="seller-input" label="Want to change to a seller account" defaultValue="" />
                {/* <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input id="email-input" aria-describedby="email-helper-text" />
                <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText> */}
            </form>
        </Container>
        // </>
    )
}

const mapStateToProps = (state) => ({
    user: state.users.userDetail,
});

export default connect(mapStateToProps)(UserForm);