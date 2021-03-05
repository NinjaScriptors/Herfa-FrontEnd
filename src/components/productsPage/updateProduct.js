import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { form, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { getDetailedObj, updateUserDetails } from "../../store/userStore/userFormSlicer";
import { getDetailedObj, updateProductDetails, updateDetaileProductdObj } from "../../store/productsStore/productsSlicer";
import {getDetailedUserObj} from '../../store/userStore/userSlicer';
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { PinDropSharp } from '@material-ui/icons';
import { getRemoteData } from '../../store/productsStore/productsSlicer';
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

const ProductFormUpdate = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = props.match.params;

    useEffect(() => {

    // console.log('param', props.match.params)

        const fetchData = async () => {
            setState(!state);
            await dispatch(getDetailedObj(id));
            await dispatch(getDetailedUserObj(props.product.seller._id));
        };
        fetchData();
    }, [dispatch]);


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
        dispatch(updateDetaileProductdObj({_id:props.product._id, seller:props.product.seller, category, countInStock, brand, description, price,name}));
        console.log('handleSubmit >>>>',price, category, name, brand, countInStock, description,props)
        dispatch(getRemoteData());

    }

    const onChange = e => {
       
            setImage(e.target.files[0]);
       
     }

    const handleChange= e=> {
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
        // if (e.target.name == "image") {
        //     let newPass = e.target.value;
        //     setImage(newPass)
        // }
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


    


    return (
     
        <Container>
            <h1>Inside Update Product Form</h1>

            <form onSubmit={handleSubmit } style={{ display: 'flex', flexDirection: 'column' }}>

                <TextField onChange={handleChange} name="name" id="name-input" label="Name" defaultValue={`${props.product.name}`} />
                <TextField onChange={handleChange} disabled name="rating" id="rating-disabled" label="Rating" value={props.product.rating} />
                <TextField onChange={handleChange} disabled name="numReviews" id="numReviews-disabled" label="Num of Reviews" value={props.product.numReviews} />
                <TextField onChange={handleChange} name="price" id="price-input" label="Price" defaultValue={`${props.product.price}`} />
                <TextField onChange={handleChange} name="category" id="category-input" label="Category" defaultValue={`${props.product.category}`} />
                <TextField onChange={handleChange} name="brand" id="brand-input" label="Brand" defaultValue={`${props.product.brand}`} />
                <TextField onChange={handleChange} name="countInStock" id="countInStock-input" label="Count in Stock" defaultValue={`${props.product.countInStock}`} />
                <TextField onChange={handleChange} name="description" id="description-input" label="Description" defaultValue={`${props.product.description}`} />
                <TextField onChange={onChange} name="image" id="image-input" label="Image" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"  />

                <Button type="submit">Submit</Button>
            </form>
        </Container>
       
    )
}


const mapStateToProps = (state, ownProps) => ({
    // proId: ownProps.match.params.id,
    product: state.products.productDetail,
    user: state.users.userDetail
});

// const mapDispatchToProps = (dispatch, getState) => ({
//     updateProductInfo: (productInfo) => dispatch(updateProductDetails(productInfo))
// })

export default connect(mapStateToProps)(ProductFormUpdate);