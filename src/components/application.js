import React from 'react';
import Header from './header/header'
import Navbar from '../components/navigation/nav.jsx'
import Banner from './banner/banner.jsx'
import LeftMenu from './left-menu/left-menu.jsx'
import Tabs from './tabs/index.jsx'
import Footer from './footer/footer.jsx'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Header/>
                    <Banner/>
                    {/* <div className='middle_side_wrapper'>
                        <LeftMenu/>
                        <Tabs/>
                    </div> */}
                    <Footer/>
                    <Switch>
                        <Route exact path='/signin'>
                            <h1>signIn</h1>
                        </Route>
                        <Route exact path='/myAccount'>
                            <h1>myAccount</h1>
                        </Route>
                        <Route exact path='/order'>
                            <h1>OrderStatus</h1>
                        </Route>
                        <Route exact path='/help'>
                            <h1>help</h1>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default Application;