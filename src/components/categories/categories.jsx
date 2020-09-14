import React from 'react';
import './main.css'

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories:[ 'Computers', 'Cooking', 'Education', 'Fiction', 'Health', 'Mathematics','Medical','Reference','Sience']
         }
    }
    render() { 
        return ( 
            <div className='catigories_wrapper'>
                <ul>
                    {this.state.categories.map((item,index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 
export default Categories;