import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import StickyFooter from './components/Footer'
import AboutUs from './components/About-us'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
     <BrowserRouter>
   <Header/>
   <Body/>
                <Switch>
   <Route path="/about-us" component={AboutUs} >
 </Route>
   </Switch>
   <StickyFooter/>
        </BrowserRouter>
   </>
  )
}

export default App;
