import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { form, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { getDetailedObj, updateUserDetails } from "../../store/userStore/userFormSlicer";
import { getDetailedObj, addProduct } from "../../store/productsStore/productsSlicer";

import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { PinDropSharp } from '@material-ui/icons';
import { getRemoteData } from '../../store/productsStore/productsSlicer';
// import { Field, reduxForm } from 'redux-form';
// import * as actions from "../../store/actions/signup-actions"
import "../../style/productForm.scss"

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const ProductForm = props => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [state, setState] = useState(false);
    const [category, setCategory] = useState("");
    const [countInStock, setCountInStock] = useState(0);
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [numReviews, setNumReviews] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        // let fullName = `${firstName} ${lastName}`;
        console.log('handleSubmit >>>>',price, category, name, brand, countInStock, description, rating, numReviews)
        dispatch(addProduct({seller:props.product.seller, name, price, category, brand, countInStock, description}))

    }

    const handleChange = (e) => {
        // console.log(e.target.name)
        if (e.target.name == "category") {
            let newEmail = e.target.value;
            setCategory(newEmail);
        }
        if (e.target.name == "countInStock") {
            let newSel = e.target.value;
            setCountInStock(newSel);
        }
        if (e.target.name == "name") {
            let newname = e.target.value;
            setName(newname);
        }
        if (e.target.name == "image") {
            let newPass = e.target.value;
            setImage(newPass)
        }
        if (e.target.name == "brand") {
            let newFirstName = e.target.value;
            setBrand(newFirstName)
        }
        if (e.target.name == "price") {
            let newLastName = e.target.value;
            setPrice(newLastName)
        }
        if (e.target.name == "description") {
            let newFull = e.target.value;
            setDescription(newFull);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setState(!state);
            // await dispatch(getDetailedObj(props.product._id));
            await dispatch(getRemoteData());

        };
        fetchData();
    }, [dispatch]);


    return (


        <section className="main-product-form">
                <div className="parallex">
                </div>
                <div className="row">
                    <div className="title">
                        {/* <h1>Update Profile</h1> */}
                    </div>
                </div>
        <Container className="main-product-form">
            <h1>Add Product</h1>

            <form onSubmit={handleSubmit }style={{ display: 'flex', flexDirection: 'column' , width : "30%" , marginLeft: "330px" , color: "white"}}>

                <TextField onChange={handleChange} name="name" id="name-input" label="Name" defaultValue="" />
                {/* <TextField disabled name="rating" id="rating-disabled" label="Rating" defaultValue={props.product.rating} /> */}
                {/* <TextField disabled name="numReviews" id="numReviews-disabled" label="Num of Reviews" defaultValue={props.product.numReviews} /> */}
                <TextField onChange={handleChange} name="price" id="price-input" label="Price" defaultValue="" />
                <TextField onChange={handleChange} name="category" id="category-input" label="Category" defaultValue="" />
                <TextField onChange={handleChange} name="brand" id="brand-input" label="Brand" defaultValue="" />
                <TextField onChange={handleChange} name="countInStock" id="countInStock-input" label="Count in Stock" defaultValue="" />
                <TextField onChange={handleChange} name="description" id="description-input" label="Description" defaultValue="" />
                {/* <TextField onChange={handleChange} name="isSeller" id="seller-input" label="Want to change to a seller account" defaultValue="" /> */}

                <Button type="submit" style={{borderBottom: "1px solid #555"}} >Submit</Button>
            </form>
        </Container>
        </section>
    
    )
}


const mapStateToProps = (state) => ({
    product: state.products.productDetail,
});

// const mapDispatchToProps = (dispatch, getState) => ({
//     addProductInfo: () => dispatch(getRemoteData())
// })

export default connect(mapStateToProps)(ProductForm);