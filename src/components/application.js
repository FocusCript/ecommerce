import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './header/header'
import Navbar from '../components/navigation/nav-container'
import Banner from './banner/banner.jsx'
import Tabs from './tabs/tab-container'
import Footer from './footer/footer.jsx'
import Help from './pages/helpPage/help.jsx'
import SignIn from './signIn/signIn-container';
import SignUp from './signUp/signUp';
import MyAccount from './pages/myAccountPage/myAccount-container';
import { connect } from 'react-redux'
import TripleIcons from './triple-icons/triple-icons';
import Order from './pages/orderStatusPage/orderStatusPage';

  
class Application extends React.Component {

    scrollToTop=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render() { 
        const { signedIn } = this.props
        return ( 
            <div>
                <BrowserRouter>
                    <div className='navbar_wrapper'>
                        <Navbar/>
                    </div>
                    { signedIn===true && <TripleIcons/> }
                    { signedIn === true ?  
                   <Switch>
                        <Route exact path='/'>
                        <div className='mt-3'>
                            <Header />
                            <Banner />
                            <div className='middle_side_wrapper'>
                                <Tabs signedIn/>
                            </div>
                        </div>
                        </Route>
                        <Route exact path='/signin'>
                            <div className='sigIn_wrapper'><SignIn /></div>
                        </Route>
                        <Route exact path='/signup'>
                            <div className='signUp_wrapper'><SignUp /></div>
                        </Route>
                        <Route exact path='/myAccount'>
                            <div className='myAccount_wrapper'><MyAccount /></div>
                        </Route>
                        <Route exact path='/order'>
                            <div className='order_wrapper mt-3'><Order/></div>
                        </Route>
                        <Route exact path='/help'>
                            <Help/>
                        </Route>
                    </Switch>
                     : 
                      <Switch>
                      <Route exact path='/'>
                        <div className='sigIn_wrapper'><SignIn /></div>
                      </Route>
                      <Route exact path='/signin'>
                          <div className='sigIn_wrapper'><SignIn /></div>
                      </Route>
                      <Route exact path='/signup'>
                          <div className='signUp_wrapper'><SignUp /></div>
                      </Route>
                      <Route exact path='*'>
                          <div className='signUp_wrapper'><SignIn /></div>
                      </Route>
                  </Switch>}
                    <div className='footer_wrapper_fixed'><Footer /></div>
                </BrowserRouter>
            </div>
         );
    }
}


const mapStateToProps=(state)=>{
    const { signedIn } = state.userReducer
    return {
        signedIn
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     selectTopCategory: (any) => dispatch(selectTopCategory(any)),
// });
 
export default connect(mapStateToProps, null)(Application);