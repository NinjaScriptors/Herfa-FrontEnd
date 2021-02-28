import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import categories from '../categoriesStore/categoriesSlicer';
import products from '../productsStore/productsSlicer';
// import cart from './cartSlicer';


const reducers = combineReducers({ categories: categories, products: products })
const store = configureStore({ reducer: reducers });

export default store;