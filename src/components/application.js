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

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='m-0 m-auto'>
                <BrowserRouter>
                    {/* <Navbar/>
                    <Header/>
                    <Banner/>
                    <div className='middle_side_wrapper'>
                        <LeftMenu/>
                        <Tabs/>
                    </div>
                     <Footer/> */}
                    <Switch>
                        <Route exact path='/signin'>
                            <SignIn/>
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
                </BrowserRouter>
            </div>
         );
    }
}
 
export default Application;