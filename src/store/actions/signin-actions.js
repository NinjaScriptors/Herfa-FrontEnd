import axios from "axios";

import base64 from 'base-64';
const usersAPI = ' https://herfa-app.herokuapp.com/api/users';

export const getSignedUpUserInfo = ({ username, password }) => dispatch => {


    console.log(username, password)
    const encodedData = base64.encode(`${username}:${password}`)
    console.log(encodedData)
    axios({
        method: 'post',
        url: `${usersAPI}/signin`,
        headers: {
            'Authorization': `Basic ${encodedData}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Content-Type': 'application/json'
        }
    })
        .then(res => { // res is the token i received from the basic Auth
            console.log("Basic Auth Tooooken>>", res)
            axios({
                method: 'post',
                url: `${usersAPI}/signin`,
                headers: { 'Authorization': `Bearer ${JSON.parse(res.request.response).token}` }
            }).then(userinfo => {
                // console.log(JSON.parse(userinfo.request.response).user._id)
                let userId =JSON.parse(userinfo.request.response).user._id;
                return dispatch(signin(userId))
            })
        })



}




const signin = (payload) => {
    return {
        type: "LOGIN",
        payload: payload
    }
}