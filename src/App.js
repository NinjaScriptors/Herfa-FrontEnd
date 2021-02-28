import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Categories from './components/categoriesPage/categories';
import Product from './components/productsPage/products';
import User from './components/user/users';
import ActiveCategories from './components/categoriesPage/categories';
// import Details from './components/productsPage/ProductDetails';
import UserDetails from './components/user/UserDetails';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/home/home';
import UserForm from './components/user/userForm';

function App() {
  return (


    //  <Home/>
    <BrowserRouter>
      {/* <User/> */}
      {/* <Route path="/user-details/:id" component={UserDetails} >
        </Route> */}
      {/* <UserDetails /> */}
      <Route exact path="/" component={UserDetails} >
      </Route>
      <Route exact path="/user-profile-update/:id" component={UserForm} >
      </Route>
      {/* <Header /> */}
      {/* <Switch> */}
      {/* <Route exact path="/"> */}
      {/* <Categories /> */}
      {/* <ActiveCategories/> */}
      {/* <Product /> */}
      {/* </Route> */}
      {/* <Route path="/details/:id" component={Details} >
    //     </Route> */}
      {/* <Route path="/checkout" component={Checkout} >
    //     </Route> */}
      {/* </Switch> */}
      {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;
