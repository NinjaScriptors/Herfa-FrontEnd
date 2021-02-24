
import axios from "axios";
const usersAPI = ' https://herfa-app.herokuapp.com/api/users';

export const getUserInfo = ({ email, password, name }) => (dispatch) => {
  // i will search by the username and check if his password is the same one that came from the user object.
  // transform plaintext password into jwt pass and compoare with the one from the user object
  // user is the retreived objct from the fetching
  let body = {};
  body.email = email;
  body.password = password;
  body.name = name
  console.log(email, name, password)
  axios({
    method:'post',
    url:`${usersAPI}/signup`,
    data: JSON.stringify(body),
    headers: {"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials":true,
    'Content-Type': 'application/json'}
  }).then(res => {
    console.log(res)
    return dispatch(signup(res))
  })


}



const signup = payload => {
  console.log("in getAction@@@@@@@@@!!!!", payload)
  return {
    type: "SIGNUP",
    payload: payload
  }
}



