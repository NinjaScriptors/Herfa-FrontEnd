import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import categories from '../categoriesStore/categoriesSlicer';
// import products from '../productsStore/productsSlicer';
// import cart from './cartSlicer';
import users from '../userStore/userSlicer';


const reducers = combineReducers({ users: users })
const store = configureStore({ reducer: reducers });

export default store;