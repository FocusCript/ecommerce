import React from 'react';
import './left-menu.css'

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                {
                    title: 'BlaBla',
                    child:['qwerty','qwerty','qwerty','qwerty','qwerty','qwerty','qwerty']
                },
                {
                    title: 'BlaBla',
                    child:['qwerty','qwerty','qwerty','qwerty','qwerty','qwerty','qwerty']
                }
            ]
         }
    }
    render() { 
        return ( 
            <div className='left_menu_wrapper'>
                <p>Categories</p>
                <p className='text-uppercase'>All</p>
                {this.state.data.map((_,i)=>(
                    <ul key={i}>
                        <p key={i+_}>{_.title}</p>
                        {_.child.map((item,index)=>(
                            <li key={index+item}>
                                 {item}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
         );
    }
}
 
export default LeftMenu;