import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";
import cookie from 'react-cookies';
import axios from 'axios';

const api = 'https://herfa-app.herokuapp.com/api';

const products = createSlice({
    name: "products",
    initialState: {
        products: [],
        filetredProduct: [],
        productDetail: {},

    },
    reducers: {
        activeProduct(state, action) {
            console.log('from product slicer', action.payload)
            state.filetredProduct = state.products.filter(product => {
                console.log('in activeProduct -->', product);
                if (product.category == action.payload) {
                    return product;
                }
            });
        },
        setProducts(state, action) {
            state.products = action.payload;
        },
        setProductDetails(state, action) {
            console.log('from the detailed object', action.payload)
            state.productDetail = action.payload;
        },
        setsearchProducts(state, action) {
            console.log("action payload in produc slicerrrrrrrrr", action.payload)
            state.filetredProduct = action.payload.data.products
        },
        addProduct(state, action) {
            console.log('from the updateUserDetails object', action.payload)
            // state.userForm = action.payload;
            state.productDetail = action.payload;
            console.log('state', state);
        },
        updateProductDetails(state, action) {
            console.log('from the updateProductDetails object', action.payload)
            state.productDetail = action.payload;
            console.log('state.productDetail', state.productDetail);
        },
        deleteProduct(state, action) {
            console.log('from the deleteProductDetails object', action.payload)
            // state.userForm = action.payload;
            state.productDetail = action.payload;
            console.log('state', state);
        },
    },
});



export const getRemoteData = () => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData!!!! ")
    return superagent.get(`${api}/products`).then(data => {
        console.log("we got the data : data.body =", data.body)
        // console.log("we got the data : data.body.result =", data.body.results)

        dispatch(setProducts(data.body))
    });
}

export const getDetailedObj = (id) => (dispatch) => {
    console.log("inside dispatch of getDetailedObj!!!! ")

    return superagent.get(`${api}/products/${id}`).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(setProductDetails(data.body))
    });
}

export const addProduct = (obj) => async (dispatch) => {
    console.log("inside dispatch of updateDetailedObj!!!! ")

    // console.log("obj._id", `${obj._id}`)

    const data = await axios({

        method: 'post',
        url: `${api}/products`,
        mode: 'cors',
        data: JSON.stringify(obj),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        }

       
    })
    console.log("we got the data updateUserDetails : data.body =", data.data)
    // return dispatch(updateProductDetails(data.data))
    if (data.data) {

        dispatch(getRemoteData());
    }

}
// export const addProduct = (obj) => dispatch => {
//     return superagent.post(`${api}/products`).set({"Access-Control-Allow-Origin": "*",
//     'Content-Type': 'application/json',}).send(JSON.stringify(obj)).then(data => {
//         if(data.body){

//             dispatch(getRemoteData());
//         }
//         console.log("we got the data addProduct : data.body =", data.body)
//     })
// }

export const updateDetaileProductdObj = (obj) => async (dispatch) => {
    // cookie.load('pro-id');
   
    console.log("obj._id", `${obj._id}`)
    console.log("obj", `${obj}`)

    console.log("inside dispatch of updateDetailedObj!!!! ")


    const data = await axios({

        method: 'put',
        url: `${api}/products/${obj._id}`,
        mode: 'cors',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        },
        data: JSON.stringify(obj),

        // .then(data => {
        //     console.log("we got the data updateUserDetails : data.data =", data.data)
        //     return dispatch(updateProductDetails(data.data))
        // }).catch(err => { console.log(err) })
    })
    console.log("we got the data updateUserDetails : data.body =", data)
    return dispatch(updateProductDetails(data.data));

    // let newObj = { ...obj}
    // newObj = JSON.stringify(newObj);
    // return superagent.put(`${api}/products/${obj._id}`).set({
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //     'Content-Type': 'application/json'
    // }).send(newObj).then(data => {
    //     console.log("we got the data updateProductDetails : data.body =", data.body)
    //     if(data.body){

    //         dispatch(getDetailedObj(`${obj._id}`))
    //     }
    // });
}

export const deleteProductdObj = (obj) => async (dispatch) => {
    // cookie.load('pro-id');
   
    console.log("obj._id", `${obj._id}`)
    console.log("obj", `${obj}`)

    console.log("inside dispatch of updateDetailedObj!!!! ")


    const data = await axios({

        method: 'delete',
        url: `${api}/products/${obj._id}`,
        mode: 'cors',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        },
        data: JSON.stringify(obj),

        // .then(data => {
        //     console.log("we got the data updateUserDetails : data.data =", data.data)
        //     return dispatch(updateProductDetails(data.data))
        // }).catch(err => { console.log(err) })
    })
    console.log("we got the data updateUserDetails : data.body =", data)
    return dispatch(deleteProduct(data.data));

    // let newObj = { ...obj}
    // newObj = JSON.stringify(newObj);
    // return superagent.put(`${api}/products/${obj._id}`).set({
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //     'Content-Type': 'application/json'
    // }).send(newObj).then(data => {
    //     console.log("we got the data updateProductDetails : data.body =", data.body)
    //     if(data.body){

    //         dispatch(getDetailedObj(`${obj._id}`))
    //     }
    // });
}
// export const getSearchProducts = (name) => (dispatch) => {
//     console.log("inside dispatch of getDetailedObj!!!! ")

//     return superagent.get(`${api}/products/${name}`).then(data => {
//         console.log("we got the data : data.body =", data.body)
//         dispatch(setsearchProducts(data.body))
//     });
// }

export const { setProducts, setProductDetails, activeProduct, setsearchProducts, updateProductDetails,deleteProduct } = products.actions;

export default products.reducer;