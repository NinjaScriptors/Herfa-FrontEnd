import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";

const api = 'https://herfa-app.herokuapp.com/api';

const form = createSlice({
    name: "form",
    initialState: {
        users: [],
        filetredUsers: [],
        userDetail: {},
    },
    reducers: {
        activeProduct(state, action) {
            console.log('from product slicer', action.payload)
            state.users = state.users.filter(user => {
                console.log('in activeProduct -->', user);
                if (user.email == action.payload) {
                    return user;
                }
            });
        },
        setProducts(state, action) {
            state.users = action.payload;
        },
        setProductDetails(state, action) {
            console.log('from the detailed object', action.payload)
            state.userDetail = action.payload;
        },
        updateUserDetails(state, action) {
            console.log('from the detailed object', action.payload)
            state.userDetail = action.payload;
        },
    },
});




export const getRemoteData = () => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData!!!! ")

    return superagent.get(`${api}/users`).set({
        
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json'
    }).then(data => {
        console.log("we got the data : data.body =", data.body)
        // console.log("we got the data : data.body.result =", data.body.results)

        dispatch(setProducts(data.body))
    });
}

export const getDetailedObj = (id) => (dispatch) => {
    console.log("inside dispatch of getDetailedObj!!!! ")

    return superagent.get(`${api}/users/${id}`).set({
       
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json'
    }).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(setProductDetails(data.body))
    });
}

export const updateDetailedObj = (obj) => (dispatch) => {
    console.log("inside dispatch of getDetailedObj!!!! ")

    return superagent.put(`${api}/users/${id}`).set({
       
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json'
    }).then(data => {
        let newObj = { ...obj }
        newObj = JSON.stringify(newObj);
        console.log("we got the data : data.body =", data.body)
        dispatch(updateUserDetails(data.body))
    });
}

export const { setProducts, setProductDetails, activeProduct, updateUserDetails } = users.actions;

export default form.reducer;