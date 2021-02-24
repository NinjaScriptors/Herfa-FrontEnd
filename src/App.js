import './App.css';
import SignUp from "./components/signup/signup";
import React from 'react';
import './styles';
import Signin from "./components/signin/signin";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
class App extends React.Component {
  componentDidMount() {
    // const user = getStore('user')
    // if (user) {
    //   this.props.dispatch(ActionCreators.login(user));
    // }
  }
  render() {
    return (
      <>
        <BrowserRouter>
        <Route path="/sign-up" component={SignUp} >
            </Route>
            <Route path="/sign-in" component={Signin} >
            </Route>
        </BrowserRouter>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     profile: state.user.profile
//   }
// }

export default App;
