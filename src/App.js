
import React from 'react';
import './App.css';
import Header from './components/Header'
import StickyFooter from './components/Footer'
import AboutUs from './components/About-us'
import Product from './components/productsPage/products'
import ActiveCategories from './components/categoriesPage/categories';
import Details from './components/productsPage/ProductDetails';
import User from './components/user/users';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import UserForm from './components/user/userForm';
import ProductForm from './components/productsPage/productForm';
import UserDetails from './components/user/UserDetails';
import SignUp from "./components/signup/signup";
import Signin from "./components/signin/signin";
import ProductFormUpdate from './components/productsPage/updateProduct'

import ChatApp from "./components/chatApp/App/index"
import TeamPage from "./components/team";


function App() {
  return (
    <>
      {/* <ProductForm/> */}

        {/* <ProductFormUpdate /> */}
      <BrowserRouter>
        {/* <Header /> */}

        {/* <Home /> */}
        {/* <UserForm/> */}

        {/* <Route exact path="/chat" component={ChatApp} >
        </Route> */}
        <Route exact path="/user-details" component={UserDetails} >
        </Route>
        <Route exact path="/user-profile-update/:id" component={UserForm} >
        </Route>
        {/* <Route exact path="/" component={Home}>
        </Route> */}

        {/* < Categories /> */}

        {/* 
        <Route path="/about-us" component={AboutUs} >
        </Route>
        <Route path="/our-team" component={TeamPage} >
        </Route> */}
        <Route exact path="/categories" component={ActiveCategories} >
        </Route>
        <Route exact path="/categories" component={Product} >

        </Route>

        <Route path="/details/:id" component={Details} >
        </Route>

        <Route path="/details-update/:id" component={ProductFormUpdate} >
        </Route>
        <Route path="/details-delete/:id" component={ActiveCategories} >
        </Route>

        <Route path="/sign-up" component={SignUp} >
        </Route>
        <Route path="/sign-in" component={Signin} >
        </Route>
        {/* <Route path="/sign-in" component={Signin} >
        </Route> */}

        {/* <StickyFooter /> */}
      </BrowserRouter>

    </>

  );
}

// const mapStateToProps = (state) => {
//   return {
//     profile: state.user.profile
//   }
// }

export default App;
