import { createSlice } from "@reduxjs/toolkit";
import { saveCookies } from "superagent";
import axios from "axios"
const usersAPI = ' https://herfa-app.herokuapp.com/api/users';

const signingUserStore = createSlice({
  name: "signing-store",
  initialState: {
    profile: {
      _id: "",
      username: '',
      password: '',
      email: '',
      isSeller: false,
      isAdmin: false,
      subscribenewsletter: false
    },
    id: ""
  },
  reducers: {
    setSigninInfo: async (state, action) => {
      console.log("action>>>", action.payload)
      localStorage.setItem("userInfo", JSON.stringify(action.payload))

      // state.id = action.payload.id 
    

      return { ...state, id: action.payload }
    },
    setSignUpInfo: (state, action) => {
      console.log("inside signup reducer",)
      return {
        ...state,
        profile: action.payload.data,
        formSubmitted: false // after update user formsubmition reset
      }
    }
  }


});


export const { setSignUpInfo, setSigninInfo } = signingUserStore.actions
export default signingUserStore.reducer;
