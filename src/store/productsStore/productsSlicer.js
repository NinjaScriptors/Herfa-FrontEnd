import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";

const api = 'https://herfa-app.herokuapp.com/api';

const products = createSlice({
    name: "products",
    initialState: {
        products: [],
        filetredProduct: [],
        productsInCart: [],
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
            console.log("action payload in produc slicerrrrrrrrr",action.payload)
            state.filetredProduct = action.payload.data.products
        }
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

// export const getSearchProducts = (name) => (dispatch) => {
//     console.log("inside dispatch of getDetailedObj!!!! ")

//     return superagent.get(`${api}/products/${name}`).then(data => {
//         console.log("we got the data : data.body =", data.body)
//         dispatch(setsearchProducts(data.body))
//     });
// }

export const { setProducts, setProductDetails, activeProduct, setsearchProducts } = products.actions;

export default products.reducer;