import { Types } from '../constant/actionTypes';

const initialState = {
  profile: {
    username: '',
    password: '',
    email: '',
    isSeller: false,
    isAdmin: false,
    subscribenewsletter: false
  },
  formSubmitted: false
}

const reducer = (state = initialState, action) => {
  let { payload, type } = action
  console.log("inside reduceeeeeeeeeeeeeeeeeeeeeeeeer")
  console.log(action)

  switch (type) {
    case "LOGIN":
      console.log('login', payload)
      return {
        ...state,
        profile: payload,
        formSubmitted: false // after update user formsubmition reset
      }


    case "SIGNUP":
      return {
        ...state,
        profile: payload,
        formSubmitted: false // after update user formsubmition reset
      }



    case "EDIT_USER_INFO":
      return {
        ...state,
        profile: payload,
        formSubmitted: false // after update user formsubmition reset
      }



    case Types.UPDATE_PROFILE_PICTURE:
      return {
        ...state,
        profile: {
          ...state.profile,
          profileImage: action.payload.image
        }
      }


    default:
      return state;
  }
}

export default reducer;