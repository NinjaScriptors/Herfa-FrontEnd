import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { form, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getDetailedObj, getRemoteData } from "../../store/userStore/userSlicer";
import { updateUserDetails, updateDetailedObj } from "../../store/userStore/userSlicer";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { PinDropSharp } from '@material-ui/icons';
import "../../style/userForm.scss"
// import { Field, reduxForm } from 'redux-form';
// import * as actions from "../../store/actions/signup-actions"


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            color:'white'
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
        let fullName = `${firstName} ${lastName}`;
        dispatch(updateDetailedObj({ _id: props.user._id, fullName, name, email, password, isSeller }))
        // dispatch(getDetailedObj("603bfe782d208700158ebecd"));
        dispatch(getRemoteData());
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



    useEffect(() => {
        const fetchData = async () => {
            setState(!state);
            await dispatch(getDetailedObj(props.user._id));

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


                <Container className="main-user-form" style= {{color:"white" }}>
                        <h1>Update Profile</h1>


             
<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' , width : "30%" , marginLeft: "750px" , color: "white"}}>
    <TextField  style ={{color: "white"}} onChange={handleChange} name="fullName" id="name-input" label="Name" defaultValue="" />
    {/* <TextField onChange={handleChange} name="email" id="email-disabled" label="Email" />
    <TextField onChange={handleChange} name="name" id="username-disabled" label="Username" /> */}
    <TextField onChange={handleChange} name="password" id="passowrd-input" label="Password" defaultValue="" />
    <TextField onChange={handleChange} name="isSeller" id="seller-input" label="Want to change to a seller account" defaultValue="" />
                  <Button style={{borderBottom: "1px solid #555"}} type="submit">Submit</Button>
</form>

</Container>
            </section>
           
        </>
    )
}


const mapStateToProps = (state) => ({
    user: state.users.userDetail,
});

// const mapDispatchToProps = (dispatch, getState) => ({
//     updateUserInfo: (userInfo) => dispatch(updateUserDetails(userInfo))
// })

export default connect(mapStateToProps)(UserForm);