import superagent from 'superagent';
import { setsearchProducts } from "../productsStore/productsSlicer"
import axios from "axios"
const api = 'https://herfa-app.herokuapp.com/api';


export const getRemoteData = () => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData in actions.js ")
    return superagent.get(`${api}/products`).then(data => {
        console.log("we got the data getRemoteData actions.js : data.body =", data.body)
        dispatch(getAction(data.body))
    });
}
export const getRemoteCategories = () => (dispatch) => {
    return superagent.get(`${api}/products/categories`).then(data => {
        console.log("we got the data getRemoteCategories actions.js: data.body =", data.body)
        dispatch(getcategories(data.body))
    });
}

export const getDetailedObj = (id) => (dispatch) => {
    return superagent.get(`${api}/products/${id}`).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(getDetails(data.body))
    });
}

/// Moooooooooo edits 
export const getSearchProducts = (name) => (dispatch) => {
    // let url = name && !categories ? `name=${name}` : "" || categories && !name?`category=${categories}` : "" ||  name && categories?`name=${name}&category=${categories}` : ""
    // let url ; 
    // if (name && !categories) {
    //     url = `name=${name}`
    // }if(categories && !name) {
    //     url=   `category=${categories}`;
    // } if (name && categories) {
    //     url=`name=${name}&category=${categories}`
    // }
    axios({

        method: 'get',
        url: `${api}/products/search?name=${name}`,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(">>>>>>response             from the search Api         >>>>>>", res)
        return dispatch(setsearchProducts(res))
    })
}

const getAction = payload => {

    return {
        type: 'GET',
        payload: payload
    }
}
const getcategories = payload => {
    return {
        type: 'GETCATEGORY',
        payload: payload
    }
}

const getDetails = payload => {
    return {
        type: 'GETDETAILS',
        payload: payload
    }
}