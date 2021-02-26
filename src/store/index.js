import { configureStore ,createAsyncThunk} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import categories from './categoriesStore/categoriesSlicer';
import products from './productsStore/productsSlicer';
import users from './userStore/userSlicer'
import signingUserStore from "./reducers/profile"
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage
};
const reducers = combineReducers({ categories: categories, products: products, users: users,signingUserStore:signingUserStore })
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({ reducer: persistedReducer, middleware: [thunk] });

export default store;
