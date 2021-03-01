import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import categories from './categoriesStore/categoriesSlicer';
import products from './productsStore/productsSlicer';
import users from './userStore/userSlicer'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({ categories: categories, products: products, users: users, form: formReducer })
const store = configureStore({ reducer: reducers });

export default store;
