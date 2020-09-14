import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            routes: [
                {
                    linkTo: '/signin',
                    title: 'Sign in'
                },
                {
                    linkTo: 'myAccount',
                    title: 'My Account'
                },
                {
                    linkTo: 'order',
                    title: 'Order Status'
                },
                {
                    linkTo: 'help',
                    title: 'Help'
                }
            ]
        }
    }
    render() {       
        return(
            <ul className='navbar-list'>
                    {this.state.routes.map((item, index) => (
                    <li key={index}>
                        <NavLink
                        className='navlink'
                        to={item.linkTo}
                        activeClassName=''
                        exact
                        >
                        {item.title}
                        </NavLink>
                    </li>
                    ))}
            </ul>
        )
    }
}
 
export default Navbar;