
import React from 'react';
import './App.css';
import Header from './components/Header'
import StickyFooter from './components/Footer'
import AboutUs from './components/About-us'
import Product from './components/productsPage/products'
import ActiveCategories from './components/categoriesPage/categories';
import Details from './components/productsPage/ProductDetails';
import { Route } from 'react-router-dom';
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

      <BrowserRouter>
        {/* <ProductFormUpdate /> */}
        <Header />

        {/* <Home /> */}
        {/* <UserForm/> */}

        {/* <Route exact path="/chat" component={ChatApp} >
        </Route> */}
        <Route exact path="/user-details" component={UserDetails} >
        </Route>
        <Route exact path="/user-profile-update/:id" component={UserForm} >
        </Route>
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/add-product" component={ProductForm}>
        </Route>

        
        <Route exact path="/about-us" component={AboutUs} >
        </Route>
        <Route exact path="/our-team" component={TeamPage} >
        </Route> 
        <Route exact path="/categories" component={ActiveCategories} >
        </Route>
        <Route exact path="/categories" component={Product} >

        </Route>

        <Route exact path="/details/:id" component={Details} >
        </Route>

        <Route exact path="/details-update/:id" component={ProductFormUpdate} >
        </Route>
        <Route exact path="/details-delete/:id" component={ActiveCategories} >
        </Route>

        <Route exact path="/sign-up" component={SignUp} >
        </Route>

        <Route exact path="/sign-in" component={Signin} >
        </Route>

        <StickyFooter />
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
