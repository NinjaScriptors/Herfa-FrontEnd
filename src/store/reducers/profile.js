import { createSlice } from "@reduxjs/toolkit";
import { saveCookies } from "superagent";


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
    setSigninInfo: (state, action) => {
      // console.log("inside reduceeeeeeeeeeeeeeeeeeeeeeeeer")
      // console.log("action>>>", action)
      // console.log("pAyloAD>>>", action.payload)
      // void (state.id = action.payload);
      // console.log(state.id)
        //   react-cookies + Cookie.load('auth')
      return { ...state, id: action.payload}
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