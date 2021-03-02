import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { form, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getDetailedObj, updateUserDetails } from "../../store/userStore/userFormSlicer";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Field, reduxForm } from 'redux-form';
// import * as actions from "../../store/actions/signup-actions"


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

let UserForm = props => {
    // const classes = useStyles();

    const classes = useStyles();
    // Hooks && Helper functions : 
    // let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [isSeller, setname] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        let fullName = `${firstName} ${lastName}`;
        console.log( password, isSeller, fullName)
        props.updateUserInfo(props.user)

    }

    function handleChange(e) {
        // console.log(e.target.name)
        // if (e.target.name == "email") {
        //     let newEmail = e.target.value;
        //     setEmail(newEmail);
        // }
        if (e.target.name == "isSeller") {
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

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getDetailedObj(props.user._id));
        };
        fetchData();
    }, [dispatch]);

    // const { handleSubmit } = props

    return (
        // <>
        <Container>
            <h1>Inside User Form</h1>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>

                {/* <div>
                    <label htmlFor="firstName">First Name</label>
                    <TextField onChange={handleChange} name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <TextField onChange={handleChange} name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <TextField onChange={handleChange} name="email" component="input" type="email" />
                </div>
                <button type="submit">Submit</button> */}
                <TextField onChange={handleChange} id="name-input" label="Name" defaultValue="" />
                <TextField  disabled id="email-disabled" label="Email" defaultValue={props.userState.email} />
                <TextField  disabled id="username-disabled" label="Username" defaultValue={props.userState.name} />
                <TextField onChange={handleChange} id="passowrd-input" label="Password" defaultValue="" />
                <TextField onChange={handleChange} id="seller-input" label="Want to change to a seller account" defaultValue="" />
                {/* <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input id="email-input" aria-describedby="email-helper-text" />
                <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText> */}
                <button type="submit">Submit</button>
            </form>
        </Container>
        // </>
    )
}

// UserForm = reduxForm({
//     // a unique name for the form
//     form: 'userUpdate'
// })(UserForm)

const mapStateToProps = (state) => ({
    user: state.users.userDetail,
    userState: state.form.userForm,
});

const mapDispatchToProps = (dispatch, getState) => ({
    updateUserInfo: (userInfo) => dispatch(updateUserDetails(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);