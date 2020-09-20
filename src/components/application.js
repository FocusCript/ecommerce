import React from 'react';
import Header from './header/header'
import Navbar from '../components/navigation/nav.jsx'
import Banner from './banner/banner.jsx'
import LeftMenu from './left-menu/left-menu.jsx'
import Tabs from './tabs/index.jsx'
import Footer from './footer/footer.jsx'
import Help from './pages/helpPage/help.jsx'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import Sidebar from './right-sidebar/r-sidebar.jsx'

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='m-0 m-auto bg-light'>
                <BrowserRouter>
                   <div className='navbar_wrapper'>
                        <Navbar/>
                   </div>
                   <div>
                       <Sidebar/>
                   </div>
                    <Switch>
                        <Route exact path='/'>
                        <div className='mt-3'>
                            <Header/>
                            <Banner/>
                            <div className='middle_side_wrapper'>
                                <LeftMenu/>
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
                            <h1>myAccount Page</h1>
                        </Route>
                        <Route exact path='/order'>
                            <h1>OrderStatus Page</h1>
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