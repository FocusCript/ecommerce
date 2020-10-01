import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'
import { FaPowerOff } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            routes: [
                {
                    linkTo: '/',
                    title: <FaHome size='20px' color='yellow'/>
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
    logOut= ()=>{
        const answer = window.confirm('You wish LOGOUT?')
        if(answer){
           setTimeout(() => {
            this.props.logOut()
          }, 1000);
           window.location.href = '/'
        }
    }
    render() {       
        return(
            <ul className='navbar-list'>
                    {this.state.routes.map((item, index) => (
                    this.props.signedIn && <li key={index}>
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
                    {this.props.signedIn ?
                    <li className='navlink cursor-pointer text-danger' onClick={this.logOut}><FaPowerOff size='18px'/></li> :
                    <li>
                        <NavLink
                        className='navlink'
                        to='/signup'
                        activeClassName=''
                        exact
                        >
                        Registration
                        </NavLink>
                    </li>}
            </ul>
        )
    }
}
 
export default Navbar;