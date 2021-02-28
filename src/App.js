
import React from 'react';
import './App.css';
import Header from './components/Header'
import StickyFooter from './components/Footer'
import AboutUs from './components/About-us'
import Product from './components/productsPage/products'
import ActiveCategories from './components/categoriesPage/categories';
import Details from './components/productsPage/ProductDetails'
// import Checkout from './components/Cart'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return (

    <BrowserRouter>
      <Header /> 
       {/* <Home /> */}
      <Switch>
        <Route exact path="/">
          {/* <Categories /> */}
          <ActiveCategories />
          <Product />

        </Route>
        <Route path="/about-us" component={AboutUs} >
        </Route>
        <Route path="/details/:id" component={Details} >
        </Route>
       
      </Switch>
      <StickyFooter />
    </BrowserRouter>

  );
}

export default App;
