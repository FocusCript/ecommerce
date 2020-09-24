import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import Header from './header/header'
import Navbar from '../components/navigation/nav.jsx'
import Banner from './banner/banner.jsx'
import Tabs from './tabs/tabs.jsx'
import Footer from './footer/footer.jsx'
import Help from './pages/helpPage/help.jsx'
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import ModalList from './modal/modal-container';
import MyAccount from './pages/myAccountPage/myAccountPage';
 
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    scrollToTop=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                   <div className='navbar_wrapper'>
                        <Navbar/>
                   </div>
                    <div className='modal_icons'>
                        <IoIosArrowDropupCircle size='40px' color='blue' onClick={this.scrollToTop} className='cursor-pointer'/>
                        <ModalList cart/>
                        <ModalList wish/>
                    </div>
                    <Switch>
                        <Route exact path='/'>
                        <div className='mt-3'>
                            <Header/>
                            <Banner/>
                            <div className='middle_side_wrapper'>
                                <Tabs/>
                            </div>
                        </div>
                        </Route>
                        <Route exact path='/signin'>
                            <div className='sigIn_wrapper'><SignIn/></div>
                        </Route>
                        <Route exact path='/signup'>
                            <div className='signUp_wrapper'><SignUp/></div>
                        </Route>
                        <Route exact path='/myAccount'>
                            <div className='myAccount_wrapper'><MyAccount/></div>
                        </Route>
                        <Route exact path='/order'>
                            <div className='order_wrapper mt-3'><h1>OrderStatus Page</h1></div>
                        </Route>
                        <Route exact path='/help'>
                            <Help/>
                        </Route>
                    </Switch>
                    <div className='footer_wrapper_fixed'><Footer/></div>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default Application;