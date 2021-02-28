
import React from 'react';
import './App.css';
import Header from './components/Header'
import StickyFooter from './components/Footer'
import AboutUs from './components/About-us'
import Product from './components/productsPage/products'
import ActiveCategories from './components/categoriesPage/categories';
import Details from './components/productsPage/ProductDetails'
import User from './components/user/users';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import UserForm from './components/user/userForm';
import UserDetails from './components/user/UserDetails';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Home /> */}

        <Route exact path="/user-details" component={UserDetails} >
        </Route>
        <Route exact path="/user-profile-update/:id" component={UserForm} >
        </Route>
        <Route exact path="/" component={Home}>
        </Route>
        {/* < Categories /> */}


        <Route path="/about-us" component={AboutUs} >
        </Route>
        <Route  exact path="/categories" component={ActiveCategories} >
        </Route>
        <Route exact path="/categories" component={Product} >

        </Route>
        <Route path="/details/:id" component={Details} >
        </Route>


        <StickyFooter />
      </BrowserRouter>
    </>

  );
}

export default App;
