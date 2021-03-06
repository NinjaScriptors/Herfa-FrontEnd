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
import "../../style/updatePro.scss";
import { storage } from "../../firebase";
import cookie from 'react-cookies';
import Axios from 'axios';
import Skeleton from 'react-loading-skeleton';


const api = 'https://herfa-app.herokuapp.com/api';
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
    const [image, setImage] = useState("");
    const [imagei, setimage] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [numReviews, setNumReviews] = useState(0);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChangeImg = e => {
        if (e.target.files[0]) {
            setimage(e.target.files[0]);
        }
    };


    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${imagei.name}`).put(imagei);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(imagei.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        );
    };


    function handleChange(e) {
        if (e.target.name === "category") {
            let newEmail = e.target.value;
            setCategory(newEmail);
        }
        if (e.target.name === "countInStock") {
            let newSel = e.target.value;
            setCountInStock(newSel);
        }
        if (e.target.name === "name") {
            let newname = e.target.value;
            setName(newname);
        }
        if (e.target.name === "image") {
            let newPass = e.target.value;
            setImage(newPass);
        }

        // if (e.target.files[0]) {
        //     setImage(e.target.files[0]);
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

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateDetaileProductdObj({ _id: props.product._id, seller: props.product.seller, name, price, category, brand, countInStock, description, image }));
        console.log('handleSubmit >>>>', price, category, name, brand, countInStock, description, props)
        dispatch(getRemoteData());
        
        // const userSignin = useSelector((state) => state.userSignin);
        // const { userInfo } = userSignin;
    }
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
    
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const { data } = await Axios.post(`${api}/products`, bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${cookie.load('auth')}`,
                },
            });
            setImage(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    };



    console.log("image: ", imagei);
    useEffect(() => {

        // console.log('param', props.match.params)

        const fetchData = async () => {
            setState(!state);
            await dispatch(getDetailedObj(id));
            await dispatch(getDetailedUserObj(props.product.seller._id));
        };
        fetchData();
    }, []);




    


    return (

        <section className="main-update-pro">
        <div className="parallex">
        </div>
        <div className="row">
            <div className="title">
            </div>
        </div>

        <Container  className="main-update-pro">
            <h1>Update Product</h1>

            <progress value={progress} max="100" />

            {console.log('url', url.toString())}

            {/* onChange={handleChangeImg} */}
            {/* || `${props.product.image}` || 'https://www.canva.com/design/DAEX0epDirk/wIOC1HFBu3_e_lhprKxKqg/view?utm_content=DAEX0epDirk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' */}
            
            {/* <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={handleChangeImg} /> */}
            {/* <Image onChange={handleChange} src={url.toString()} /> */}
            {/* <button onClick={handleUpload}>Upload</button> */}
            
            {/* second way */}
            {/* <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={handleChangeImg} />
            <Image onChange={handleChange} src={url.toString()} />
            <button onClick={handleUpload}>Upload</button>
            <p>{console.log('type of url', typeof url)}</p>
             */}
            <p>{console.log('type of url', typeof url)}</p>
           

            <form onSubmit={handleSubmit } style={{ display: 'flex', flexDirection: 'column' , width : "30%" , marginLeft: "400px" , color: "white"}}>

                <TextField onChange={handleChange} name="name" id="name-input" label="Name" defaultValue={`${props.product.name || <Skeleton/>}`} />
                <TextField  disabled name="rating" id="rating-disabled" label="Rating" value={props.product.rating} />
                <TextField  disabled name="numReviews" id="numReviews-disabled" label="Num of Reviews" value={props.product.numReviews  || <Skeleton/>} />
                <TextField onChange={handleChange} name="price" id="price-input" label="Price" defaultValue={`${props.product.price  || <Skeleton/>} `} />
                <TextField onChange={handleChange} name="category" id="category-input" label="Category" defaultValue={`${props.product.category  || <Skeleton/>}`} />
                <TextField onChange={handleChange} name="brand" id="brand-input" label="Brand" defaultValue={`${props.product.brand  || <Skeleton/>}`} />
                <TextField onChange={handleChange} name="countInStock" id="countInStock-input" label="Count in Stock" defaultValue={`${props.product.countInStock  || <Skeleton/>}`} />
                <TextField onChange={handleChange} name="description" id="description-input" label="Description" defaultValue={`${props.product.description  || <Skeleton/>}`} />
                {/* <TextField onChange={onChange} name="image" id="image-input" label="Image" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"  /> */}

                {url}

                {/* third way */}
                {/* <TextField type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={handleChangeImg} name="image" defaultValue={`${url}`} id="seller-input" label="Image" /> */}

             {/* second way */}
                {/* <input type="text"  onChange={(e) => setImage(e.target.value)} name="image" value={url.toString()} id="seller-input" label="Image" /> */}

                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="text"
                    placeholder="Enter image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                ></input>


                <label htmlFor="imageFile">Image File</label>
                <input
                    type="file"
                    id="imageFile"
                    label="Choose Image"
                    onChange={uploadFileHandler}
                ></input>


                <Button type="submit" style={{borderBottom: "1px solid #555"}} >Submit</Button>
                
            </form>
        </Container>
        </section>
       
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