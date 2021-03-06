import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";
import axios from "axios";
import cookie from 'react-cookies';


const api = 'https://herfa-app.herokuapp.com/api';

const users = createSlice({
    name: "users",
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
            console.log('from the updateUserDetails object', action.payload)
            state.userDetail = action.payload;
            console.log('state.userDetail', state.userDetail);
        },
    },
});




export const getRemoteData = () => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData!!!! ")
    return superagent.get(`${api}/users`).then(data => {
        console.log("we got the data : data.body =", data.body)
        // console.log("we got the data : data.body.result =", data.body.results)

        dispatch(setProducts(data.body))
    });
}

export const getDetailedUserObj = (id) => (dispatch) => {
    console.log("inside dispatch of getDetailedObj!!!! ")

    return superagent.get(`${api}/users/${id}`).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(setProductDetails(data.body))
    });
}


export const updateDetailedObj = (obj) => async (dispatch) => {
    console.log("inside dispatch of updateDetailedObj!!!! ", obj)

    console.log("obj._id", `${obj._id}`)

    const data = await axios({
        url: `${api}/users/${obj._id}`,
        method: 'put',
        mode: 'cors',
        data: JSON.stringify(obj),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        }

        // .then(data => {
        //         console.log("we got the data updateUserDetails : data.body =", data.data)
        //         return dispatch(updateUserDetails(data.data))
        //     })
    })
    await localStorage.clear();
    console.log("we got the data updateUserDetails : data.body------------------------------ =", data.data)
    localStorage.setItem("userInfo", JSON.stringify(data.data))
    return await dispatch(updateUserDetails(data.data))


    // let data = JSON.stringify(obj );
    // console.log('data', data)

    // const response = await axios.put(`${api}/users/${obj._id}`,data,{headers:{"Content-Type" : "application/json"}});
    // console.log("we got the data updateUserDetails : data.data =", response.data)

    // let newObj = { ...obj}
    // newObj = JSON.stringify(newObj);
    // return superagent.put(`${api}/users/${obj._id}`).set({
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //     'Content-Type': 'application/json'
    // }).send(newObj).then(data => {
    //     console.log("we got the data updateUserDetails : data.body =", data.body)
    //     if(data.body){

    //         dispatch(updateUserDetails(data.body))
    //     }
    // });
}

export const { setProducts, setProductDetails, activeProduct, updateUserDetails } = users.actions;

export default users.reducer;