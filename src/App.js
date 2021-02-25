import React from 'react';
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Categories from './components/categoriesPage/categories'
import Product from './components/productsPage/products' 
import ActiveCategories from './components/categoriesPage/categories';
import Details from './components/productsPage/ProductDetails'
// import Checkout from './components/Cart'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/home/home';

function App() {
  return (

      //  <Home/>
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          {/* <Categories /> */}
          <ActiveCategories/>
          <Product />
        </Route>
        <Route path="/details/:id" component={Details} >
        </Route>
        {/* <Route path="/checkout" component={Checkout} >
        </Route> */}
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;
