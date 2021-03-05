import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { form, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getDetailedUserObj, getRemoteData } from "../../store/userStore/userSlicer";
import { updateUserDetails, updateDetailedObj } from "../../store/userStore/userSlicer";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { PinDropSharp } from '@material-ui/icons';

// import { Field, reduxForm } from 'redux-form';
// import * as actions from "../../store/actions/signup-actions"


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const UserForm = props => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [state, setState] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSeller, setname] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [name, setName] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateDetailedObj({_id: JSON.parse(localStorage.getItem("userInfo"))._id, fullName, name, email, password, isSeller}))
        // dispatch(getDetailedObj("603bfe782d208700158ebecd"));
        dispatch(getRemoteData());
        // let fullName = `${firstName} ${lastName}`;
        // console.log('handleSubmit >>>>',password, isSeller, fullName)
        // props.updateDetailedObj(props.user)
        console.log('handleSubmit >>>>', fullName, email, name, password, isSeller)

    }

    const handleChange = (e) => {
        // console.log(e.target.name)
        if (e.target.name == "email") {
            let newEmail = e.target.value;
            setEmail(newEmail);
        }
        if (e.target.name == "name") {
            let newname = e.target.value;
            setName(newname);
        }
        if (e.target.name == "isSeller") {
            let newSel = e.target.value;
            setname(newSel);
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
        if (e.target.name == "fullName") {
            let newFull = e.target.value;
            setFullName(newFull);
        }
    }

    // const update = async () => {
    //     await dispatch(getDetailedObj("603bfe782d208700158ebecd"));
    // };

    // const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            setState(!state);
            await dispatch(getDetailedUserObj(JSON.parse(localStorage.getItem("userInfo"))._id));
            // await dispatch(updateDetailedObj(props.user));

        };
        fetchData();
    }, [dispatch]);


    return (

        <Container>
            <h1>Inside User Form</h1>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField onChange={handleChange} name="fullName" id="name-input" label="Name" defaultValue={`${JSON.parse(localStorage.getItem("userInfo")).fullName}`} />
                <TextField onChange={handleChange} disabled name="email" id="email-disabled" label="Email" value ={`${JSON.parse(localStorage.getItem("userInfo")).email}`} />
                {console.log("props.user.email ",JSON.parse(localStorage.getItem("userInfo")).email)}
                <TextField onChange={handleChange} disabled name="name" id="username-disabled" label="Username" value ={`${JSON.parse(localStorage.getItem("userInfo")).name}`} />
                <TextField onChange={handleChange} name="password" id="passowrd-input" label="Password"  />
                <TextField onChange={handleChange} name="isSeller" id="seller-input" label="Want to change to a seller account" defaultValue={`${JSON.parse(localStorage.getItem("userInfo")).isSeller}`} />
                <Button type="submit">Submit</Button>
            </form>
        </Container>

    )
}


const mapStateToProps = (state) => ({
    userInfo: state.users.userDetail,
});

// const mapDispatchToProps = (dispatch, getState) => ({
//     updateUserInfo: (userInfo) => dispatch(updateUserDetails(userInfo))
// })

export default connect(mapStateToProps)(UserForm);