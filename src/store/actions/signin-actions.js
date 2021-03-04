import { setSigninInfo } from "../reducers/profile"
import axios from "axios";
import base64 from 'base-64';
import cookie from 'react-cookies';


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
            cookie.save("auth", res.data.token)
            console.log("Basic Auth Tooooken>>", res)
            axios({
                method: 'post',
                url: `${usersAPI}/signin`,
                headers: { 'Authorization': `Bearer ${JSON.parse(res.request.response).token}` }
            }).then(userinfo => {
                // console.log(JSON.parse(userinfo.request.response).user._id)
                let userId = JSON.parse(userinfo.request.response).user._id;
                axios({
                    method: 'get',
                    url: `${usersAPI}/${userId}`,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": true,
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    // return res.data
                    return dispatch(setSigninInfo(res.data))
                })


            })
        })



}




// const signin = (payload) => {
//     return {
//         type: "LOGIN",
//         payload: payload
//     }
// }
