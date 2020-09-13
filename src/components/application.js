import React from 'react';
import Header from './header/index'
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
                    <Header/>
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