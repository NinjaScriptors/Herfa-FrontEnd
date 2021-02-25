import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";

const api = 'https://herfah.herokuapp.com/api';

const categories = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        activeCategories: 'food'
    },
    reducers: {
        active(state, action) {
            state.activeCategories = action.payload;
            console.log('action from active =====>',state.activeCategories)
        },
        getcategories(state, action) {
            console.log('action from getcategories =====>', action.payload);
            state.categories = action.payload;
        },
    }
});

export const getRemoteCategories = () => (dispatch) => {
    console.log('inside --> getRemoteCategories -- categoriesSlicer')
    return superagent.get(`${api}/products/categories`).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(getcategories(data.body))
    });
}

export const { active, getcategories } = categories.actions;

export default categories.reducer;