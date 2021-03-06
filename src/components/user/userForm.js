import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { form, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getDetailedUserObj, getRemoteData } from "../../store/userStore/userSlicer";
import { updateUserDetails, updateDetailedObj } from "../../store/userStore/userSlicer";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { AddCircleOutlined, PinDropSharp } from '@material-ui/icons';
import { NavLink } from "react-router-dom"
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Skeleton from 'react-loading-skeleton';
import Alert from '@material-ui/lab/Alert';


import "../../style/userForm.scss"

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
let flag = false;
const UserForm = props => {
    console.log("usreidddddddddddddd", props.user)

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
    let [useless, setUsless] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        // e.target.reset();
        dispatch(updateDetailedObj({ _id: JSON.parse(localStorage.getItem("userInfo"))._id, fullName, name, email, password, isSeller }))
        // dispatch(getDetailedObj("603bfe782d208700158ebecd"));
        dispatch(getRemoteData());
        // console.log('handleSubmit >>>>',password, isSeller, fullName)
        // props.updateDetailedObj(props.user)
        console.log('handleSubmit >>>>', fullName, email, name, password, isSeller)

        setTimeout(() => {
            setUsless("blablabla")
        }, 1200)
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
            let newSel = e.target.checked;
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


    useEffect(() => {
        const fetchData = async () => {
            setState(!state);
            await dispatch(getDetailedUserObj(JSON.parse(localStorage.getItem("userInfo"))._id));
            // await dispatch(updateDetailedObj(props.user));

        };
        fetchData();
    }, [dispatch]);


    return (

        <>
            <section className="main-user-form">
                <div className="parallex">
                </div>
                <div className="row">
                    <div className="title">
                    </div>
                </div>


                <Container className="main-user-form" style={{ color: "gray" }}>
                    <h1 style={{ marginLeft: "600px" }}>Update Profile</h1>



                    {useless === "blablabla" ? <Alert style={{ width: "40%", backgroundColor: "transparent", marginLeft: "690px" }} severity="success">Profile has been Updated successfully. Please refresh the page !</Alert> : ""}
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: "30%", marginLeft: "750px" }}>
                        <TextField onChange={handleChange} name="fullName" id="name-input" label="Name" defaultValue={`${JSON.parse(localStorage.getItem("userInfo")).fullName}` || <Skeleton />} />
                        <TextField onChange={handleChange} disabled name="email" id="email-disabled" label="Email" value={`${JSON.parse(localStorage.getItem("userInfo")).email}` || <Skeleton />} />
                        {console.log("props.user.email ", JSON.parse(localStorage.getItem("userInfo")).email)}
                        <TextField onChange={handleChange} disabled name="name" id="username-disabled" label="Username" value={`${JSON.parse(localStorage.getItem("userInfo")).name}` || <Skeleton />} />
                        <TextField type="password" onChange={handleChange} name="password" id="passowrd-input" label="Password" />
                        <FormControlLabel
                            control={< Checkbox style={{ color: "#C99A5C" }} onChange={handleChange} name="isSeller" id="seller-input" defaultValue={`${JSON.parse(localStorage.getItem("userInfo")).isSeller}` || <Skeleton />} />}
                            label="Want to change to a seller account"


                        />

                        {/* <Checkbox
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'checkbox' }}
                            style={{ backgroundColor: "C99A5C" }}
                            label="Want to change to a seller account"
                        /> */}
                        {/* <TextField onChange={handleChange} name="isSeller" id="seller-input" label="Want to change to a seller account" defaultValue={`${JSON.parse(localStorage.getItem("userInfo")).isSeller}`} /> */}
                        <Button style={{ borderBottom: "1px solid #555" }} type="submit">Submit</Button>
                    </form>

                    <Button style={{ marginLeft: "950px", marginTop: "30px", color: "#C99A5C" }}><NavLink style={{ color: "#C99A5C" }} to="/add-product"><AddCircleOutlineTwoToneIcon style={{ width: 40, height: 40, color: "#C99A5C" }} />Add Product</NavLink></Button>
                </Container>
            </section>
        </>
    )
}


const mapStateToProps = (state) => ({
    userInfo: state.users.userDetail,
});

// const mapDispatchToProps = (dispatch, getState) => ({
//     updateUserInfo: (userInfo) => dispatch(updateUserDetails(userInfo))
// })

export default connect(mapStateToProps)(UserForm);