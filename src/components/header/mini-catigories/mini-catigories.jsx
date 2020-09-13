import React from 'react';
import './main.css'

class Catigories extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            catigories:[ 'Computers', 'Cooking', 'Education', 'Fiction', 'Health', 'Mathematics','Medical','Reference','Sience','qwerty']
         }
    }
    render() { 
        return ( 
            <div className='catigories_wrapper'>
                <ul>
                    {this.state.catigories.map((item,index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 
export default Catigories;